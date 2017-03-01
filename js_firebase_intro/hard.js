// harder Firbase Intro Prototype js file

var config = {
    apiKey: "AIzaSyBijpVCxItDKQdgJ86FhtZzzwuHRTj6hTs",
    authDomain: "lfzdemo-dcce6.firebaseapp.com",
    databaseURL: "https://lfzdemo-dcce6.firebaseio.com",
    storageBucket: "lfzdemo-dcce6.appspot.com",
    messagingSenderId: "76020387843"
};
firebase.initializeApp(config);
var db = firebase.database();

$(document).ready(function(){
    db.ref('students').on('value', handleDisplayGrades);
    $('#clear-form').on('click', handleFormCancel);
    $('#add-student').on('click', handleFormAddStudent);
    $('#edit-student').on('click', handleFormEditStudent);
    $('.sgt')
        .on('click', '.edit', handleRowEditStudent)
        .on('click', '.delete', handleRowDeleteStudent);
});

//  Event handlers

function handleDisplayGrades(snapshot){
    updateDom(snapshot.val());
}
function handleFormCancel(){
    setFormAddMode();
}
function handleFormAddStudent(){
    var student = getFormData();
    for (var field in student){
        if (student.hasOwnProperty(field) && !student[field]){
            return false;
        }
    }
    db.ref('students').push(formDataToDb(student).data).then(setFormAddMode);
}
function handleFormEditStudent(){
    var formData = getFormData();
    for (var field in formData){
        if (formData.hasOwnProperty(field) && !formData[field]){
            return false;
        }
    }
    var student = formDataToDb(formData);
    db.ref('students/' + student.id).update(student.data).then(setFormAddMode);
}
function handleRowEditStudent(){
    setFormEditMode(
        getRowData(
            $(this).closest('tr')
        )
    );
}
function handleRowDeleteStudent(){
    var student = formDataToDb(getRowData($(this.closest('tr'))));
    if (confirm('Are you sure you want to delete this grade for ' + student.data.student_name + '?')){
        db.ref('students/' + student.id).remove();
    }
}

//  Helper functions

function updateDom(d){
    var table = $('.sgt tbody');
    table.html('');
    for(var key in d){
        if(d.hasOwnProperty(key)){
            var row = $('<tr>');
            var id = $('<td class="sid">' + d[key].student_id + '</td>');
            var name = $('<td class="sname">' + d[key].student_name + '</td>');
            var course = $('<td class="course">' + d[key].course + '</td>');
            var grade = $('<td class="grade">' + d[key].grade + '</td>');
            var actions = $('<td>', {'data-uid': key});
            var edit = $('<button>', {
                class: 'btn btn-sm btn-info edit',
                text: 'Edit'
            });
            var del = $('<button>', {
                class: 'btn btn-sm btn-danger delete',
                text: 'Delete'
            });

            table.append(row.append(id, name, course, grade, actions.append(edit, del)));
        }
    }
}
function clearForm(){
    $('.sgt-form input').each(function(k, v){
        $(v).val('');
    });
}
function getFormData(){
    var output = {};
    $('.sgt-form input').each(function(k, v){
        var ele = $(v);
        output[ele.attr('id')] = ele.val();
    });
    var uid = $('#edit-student').attr('data-uid');
    if (uid){
        output.uid = uid;
    }

    return output;
}
function populateFormData(sid, sname, course, grade){
    $('#sid').val(sid);
    $('#sname').val(sname);
    $('#course').val(course);
    $('#grade').val(grade);
}
function getRowData(e) {
    return {
        uid: e.find('td[data-uid]').attr('data-uid'),
        sid: e.find('.sid').text(),
        sname: e.find('.sname').text(),
        course: e.find('.course').text(),
        grade: e.find('.grade').text()
    };
}
function formDataToDb(formData){
    return {
        id: formData.uid || null,
        data: {
            student_id: formData.sid,
            student_name: formData.sname,
            course: formData.course,
            grade: formData.grade
        }
    };
}
function setFormEditMode(student){
    populateFormData(student.sid, student.sname, student.course, student.grade);
    $('#add-student').addClass('hidden');
    $('#edit-student').removeClass('hidden').attr('data-uid', student.uid);
}
function setFormAddMode(){
    clearForm();
    $('#edit-student').addClass('hidden').removeAttr('data-uid');
    $('#add-student').removeClass('hidden');
}
