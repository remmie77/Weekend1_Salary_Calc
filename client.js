console.log( 'js' );

$( document ).ready( onReady );

function onReady(){
    console.log( 'jQ' );
    $( '.btnDiv' ).on( 'click', '#submitBtn', getInfoCreateClass );
    $( '.table' ).on( 'mouseenter', '.highlight', changeColorRow, changeColorBack);
    $( '.table' ).on( 'mouseleave', '.highlight', changeColorBack);
}

// create a variable which will store monthly budget 
 let totalBudget = 0;
 
 // create an array to hold individuals as a group
 const employeeArr = [];

// create Class for employee/budget info
class Employee{
    constructor( firstNameIn, lastNameIn, idIn, titleIn, salaryIn ){
        this.firstNameIn = firstNameIn;
        this.lastNameIn = lastNameIn;
        this.idIn = idIn;
        this.titleIn = titleIn;
        this.salaryIn = salaryIn;
    }//end constructor
}//end class Employee

// create a function which will take in .inputFieldsDiv(s), and create a new class
function getInfoCreateClass(){
    console.log( 'in getInfoCreateClass' );
    let a = $( '#firstNameInput' ).val();
    let b = $( '#lastNameInput' ).val();
    let c = $( '#idInput' ).val();
    let d = $( '#titleInput' ).val();
    let e = $( '#annualSalaryInput' ).val();
    const newOne = new Employee( a,b,c,d,e );
    pushClassCLearInputs( newOne );
}//end getInfoCreateClass

// create function to push new Class to employeeArr, then clear the input fields.
function pushClassCLearInputs( employeeIn ){
    console.log( 'in pushClassCLearInputs' );
    employeeArr.push( employeeIn );
    console.log( employeeArr );
    $( '#firstNameInput' ).val( '' );
    $( '#lastNameInput' ).val( '' );
    $( '#idInput' ).val( '' );
    $( '#titleInput' ).val( '' );
    $( '#annualSalaryInput' ).val( '' );
    clearTable();
}//end pushClassCLearInputs

// create a function which clears the table 
function clearTable(){
    console.log( 'in clearTable' );
    $( '.table' ).empty();
    displayFromInput();
}//end clearTable

//create function which appends array inputs when new class is formed
function displayFromInput(){
    console.log( 'in displayFromInput' );
    $('.table').append( '<thead><tr><th>Firstname</th><th>Lastname</th><th>ID</th><th>Title</th><th>Annual Salery</th></tr></thead>' );
    for( let employee of employeeArr ){
        $('.table').append( '<tr class="highlight" ><td>' + employee['firstNameIn'] + '</td><td>' + employee['lastNameIn'] + '</td><td>' + employee['idIn'] + '</td><td>' + employee['titleIn'] + '</td><td>' + employee['salaryIn'] + '</td></tr>' ); 
    // turn salary to a number and add it to totalBudget var
        totalBudget += Number( employee['salaryIn'] );
        console.log( totalBudget );
        adjBudget(( totalBudget ).toFixed( 2 ));
    }
}//end displayFromInput

// create a function which will adjust the monthlyBudget var and append to DOM
function adjBudget( newBudget ){
    console.log( 'in adjBudget' + newBudget );
    $( '#totalCash' ).text( newBudget );
    if( totalBudget > 20000 ){
        $( '#totalMonthly' ).css( 'color', 'red' );
    }//end if budget is over
}//end adjBudget

// create a function which will change background color of row with hover event.
// also remove said row with a double click event
//re-run adjBudget
// stretch (prompt are you sure? with yes/no when row is double clicked)


// function removeEmployee(){
//     console.log ( 'in removeEmployee' );
//     $( '.tableDiv' ).on( 'hover', '<tr>',  );
// }//end removeEmployee

function changeColorRow(){
    console.log( 'in changeColorRow' );
    $( this ).css( "background-color", "yellow" );
}//end changeColorRow

function changeColorBack(){
    console.log( 'in changeColorBack' );
    $( this ).css( "background-color", "#2591DB" );
}//end changeColorBack

// if budget reaches 20G's change something to RED colors






