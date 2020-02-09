import React from 'react'
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import "./admin.css";
<<<<<<< HEAD
=======
// import Add_student from "./addStudent"
>>>>>>> 5f47586b8aa7beb81a08edaffa42dd47741e5e48

class Admin extends React.Component{
    constructor(props){
        super(props);
        this.state={};
        this.state.student=[];
<<<<<<< HEAD
        this.state.faculty=[];
        this.state.news=[]
    }

    addStudent(student_info){
        console.log(student_info);
        let {student}=this.state;
=======
        this.state.faculty=[]
    }

    addInfo(student_info){
        console.log(student_info);
        let student=this.state.student;
>>>>>>> 5f47586b8aa7beb81a08edaffa42dd47741e5e48
        student.push(student_info);
        console.log(student)
        this.setState({
            student:student
        })
        console.log(this.state.student);
    }
    
    addFaculty(faculty_info){
        console.log(faculty_info);
<<<<<<< HEAD
        let {faculty}=this.state;
=======
        let faculty=this.state.faculty;
>>>>>>> 5f47586b8aa7beb81a08edaffa42dd47741e5e48
        faculty.push(faculty_info);
        console.log(faculty)
        this.setState({
            faculty:faculty
        })
        console.log(this.state.faculty);
    }

<<<<<<< HEAD
    AddNews(info){
        console.log(info);
        let {news} = this.state;
        news.push(info);
        this.setState({
            news:news
        })
        console.log(this.state.news);
    }

    render(){
        return(
            <React.Fragment>
                <div id="navbar">
                    <p>CMS</p>
                    <input type="text" name="Search" placeholder="Search..."></input>
                </div>

                <div id="menu">
                    <ul>
                        <Link to="/admin/dashboard" className="Link"><li ><i class="fas fa-th fa-lg"></i>Dashboard</li></Link>
                        <Link to="/admin/admin_student" className="Link"><li><i className="fas fa-user-graduate fa-lg"></i>Students</li></Link>
                        <Link to="/admin/admin_faculty" className="Link"><li><i className="fas fa-chalkboard-teacher fa-lg"></i>Faculty</li></Link>
                        <li><i class="fas fa-building fa-lg"></i>Departments</li>
                        <li><i class="fas fa-book fa-lg"></i>Courses</li>
                        <li><i class="fas fa-school fa-lg"></i>Classes</li>
                        <Link to="/admin/news" className="Link"><li><i class="fas fa-bell fa-lg"></i>News</li></Link>
                        <li><i class="far fa-clock fa-lg"></i>Timetable</li>
                        <li><i class="fas fa-credit-card fa-lg"></i>Payment</li>
                        <li><i class="fas fa-comment-alt fa-lg"></i>Messages</li>
                        <button>Logout</button>
=======
    render(){
        return(
            <React.Fragment>
                <div id="menu">
                    <ul>
                        <Link to="/admin"><li>Admin</li></Link>
                        <li>Dashboard</li>
                        <Link to="/admin/admin_student"><li>Student</li></Link>
                        <Link to="/admin/admin_faculty"><li>Faculty</li></Link>
                        <li>Department</li>
                        <li>Courses</li>
                        <li>Dashboard</li>
                        <li>Dashboard</li>
>>>>>>> 5f47586b8aa7beb81a08edaffa42dd47741e5e48
                    </ul>
                </div>

                <div id="right">
<<<<<<< HEAD
                    <Route path="/admin/dashboard" render={(e)=><Dashboard student={this.state.student} faculty={this.state.faculty} news={this.state.news}></Dashboard>}></Route>
                    <Route path="/admin/admin_faculty" render={(e)=><Admin_to_faculty addFaculty={this.addFaculty.bind(this)} faculty={this.state.faculty}></Admin_to_faculty>}></Route>
                    <Route path="/admin/admin_student" render={(e)=><Admin_to_student addStudent={this.addStudent.bind(this)} student={this.state.student}></Admin_to_student>}></Route>    
                    <Route path="/admin/news" render={(e)=><AddNews AddNews={this.AddNews.bind(this)}></AddNews>}></Route>
=======
                    <Route path="/admin/admin_faculty" render={(e)=><Admin_to_faculty addFaculty={this.addFaculty.bind(this)} faculty={this.state.faculty}></Admin_to_faculty>}></Route>
                    <Route path="/admin/admin_student" render={(e)=><Admin_to_student addInfo={this.addInfo.bind(this)} student={this.state.student}></Admin_to_student>}></Route>    
                    {/* <Route path="/admin/admin_student/Add_student" render={(e)=><Add_student addInfo={this.addInfo.bind(this)}></Add_student>}></Route> */}
>>>>>>> 5f47586b8aa7beb81a08edaffa42dd47741e5e48
                </div>
            </React.Fragment>
        )
    }
}

export default Admin;

function Admin_to_student(props){
    return (
        <div>
            <div> 
            <h2>Manage Student</h2>
            <Link to="/admin/admin_student/Add_student">Add Student</Link>
            </div>
<<<<<<< HEAD
            <Route path="/admin/admin_student/Add_student" render={(e)=><Add_student addStudent={props.addStudent.bind(this)}></Add_student>}></Route>
=======
            <Route path="/admin/admin_student/Add_student" render={(e)=><Add_student addInfo={props.addInfo.bind(this)}></Add_student>}></Route>
>>>>>>> 5f47586b8aa7beb81a08edaffa42dd47741e5e48
            <div>
            {props.student.map((x)=>(
                    <div>{x.name} {x.enroll} {x.address} {x.dob} </div>
                    ))}
            </div>        
        </div>
    )
}

function Admin_to_faculty(props){
    return (
        <div>
            <div> 
            <h2>Manage Faculty</h2>
            <Link to="/admin/admin_faculty/Add_faculty">Add Faculty</Link>
            </div>
            <Route path="/admin/admin_faculty/Add_faculty" render={(e)=><Add_faculty addFaculty={props.addFaculty.bind(this)}></Add_faculty>}></Route>
            <div>
<<<<<<< HEAD
            {props.faculty.map((x,i)=>(
=======
            {props.faculty.map((x)=>(
>>>>>>> 5f47586b8aa7beb81a08edaffa42dd47741e5e48
                    <div>{x.name} {x.enroll} {x.address} {x.dob} </div>
                    ))}
            </div>        
        </div>
    )
}

function Add_student(props){

    const [name, setName] = React.useState("");
    const [enroll, setEnroll] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [dob, setDob] = React.useState(null);
    const [fname, setFname] = React.useState("");
    const [mname, setMname] = React.useState("");

return (
    <div className="add_student">
<<<<<<< HEAD
       <input type="text" name="Name" placeholder="Name" onChange={(e)=>{setName(e.target.value)}} value={name}></input> 
       <input type="text" name="enroll_no" placeholder="Enrollment Number" onChange={(e)=>{setEnroll(e.target.value)}} value={enroll}></input> 
=======
       <input type="text" name="name" placeholder="Name" onChange={(e)=>{setName(e.target.value)}} value={name}></input> 
       <input type="number" name="enroll_no" placeholder="Enrollment Number" onChange={(e)=>{setEnroll(e.target.value)}} value={enroll}></input> 
>>>>>>> 5f47586b8aa7beb81a08edaffa42dd47741e5e48
       <input type="text" name="address" placeholder="Address" onChange={(e)=>{setAddress(e.target.value)}} value={address}></input> 
       <input type="date" name="dob" onChange={(e)=>{setDob(e.target.value)}} value={dob}></input> 
       <input type="text" name="fatherName" placeholder="Father's Name" onChange={(e)=>{setFname(e.target.value)}} value={fname}></input> 
       <input type="text" name="motherName" placeholder="Mother's Name" onChange={(e)=>{setMname(e.target.value)}} value={mname}></input>
     
<<<<<<< HEAD
        <button type="submit" onClick={(e)=>{props.addStudent({name,enroll,address,dob,fname,mname});setName("");setEnroll("");setAddress("");setDob(null);setFname("");setMname("")}}>Add</button>
        <Link to="/admin/admin_student">Close</Link> 
=======
        <button type="submit" onClick={(e)=>{props.addInfo({name,enroll,address,dob,fname,mname});setName("");setEnroll("");setAddress("");setDob(null);setFname("");setMname("")}}>Add</button>
        <Link to="/admin/admin_student">Cancel</Link> 
>>>>>>> 5f47586b8aa7beb81a08edaffa42dd47741e5e48
    </div>
)
}

<<<<<<< HEAD
function Dashboard(props){
    return (
        <React.Fragment>
        <div className="dashboard-head">
            <h2>Dashboard</h2>
        </div>
        <div className="dashboard">
            <div className="banner">
                <div className="banner-info">
                <span>{props.student.length}</span>
                <p>{props.student.length === 1 ? " Student":" Students"}</p>
                </div>
            </div>
            <div className="banner">
                <div className="banner-info">
                <span>{props.faculty.length}</span>
                <p>Faculty</p>
                </div>
            </div>
            <div className="banner">
                <div className="banner-info">
                <span>{props.news.length}</span>
                <p>News</p>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}

=======
>>>>>>> 5f47586b8aa7beb81a08edaffa42dd47741e5e48
function Add_faculty(props){

    const [name, setName] = React.useState("");
    const [id, setId] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [dob, setDob] = React.useState(null);
    const [fname, setFname] = React.useState("");
    const [mname, setMname] = React.useState("");

return (
    <div className="add_student">
       <input type="text" name="name" placeholder="Name" onChange={(e)=>{setName(e.target.value)}} value={name}></input> 
       <input type="number" name="id" placeholder="Enrollment Number" onChange={(e)=>{setId(e.target.value)}} value={id}></input> 
       <input type="text" name="address" placeholder="Address" onChange={(e)=>{setAddress(e.target.value)}} value={address}></input> 
       <input type="date" name="dob" onChange={(e)=>{setDob(e.target.value)}} value={dob}></input> 
       <input type="text" name="fatherName" placeholder="Father's Name" onChange={(e)=>{setFname(e.target.value)}} value={fname}></input> 
       <input type="text" name="motherName" placeholder="Mother's Name" onChange={(e)=>{setMname(e.target.value)}} value={mname}></input>
     
        <button type="submit" onClick={(e)=>{props.addFaculty({name,id,address,dob,fname,mname});setName("");setId("");setAddress("");setDob(null);setFname("");setMname("")}}>Add</button>
        <Link to="/admin/admin_faculty">Cancel</Link> 
    </div>
)
}

<<<<<<< HEAD
function AddNews(props){
    const [title,setTitle] = React.useState(null);
    const [description,setDescription] = React.useState(null);
    
    return (
        <div>
            <input type="text" name="title" placeholder="Title" value={title} onChange={(e)=>{setTitle(e.target.value)}}></input>
            <input type="text" name="description" placeholder="Description" value={description} onChange={(e)=>setDescription(e.target.value)}></input>
            <button type="submit" onClick={(e)=>{props.AddNews({title,description})}}>Add</button>
        </div>
    )
}

=======
>>>>>>> 5f47586b8aa7beb81a08edaffa42dd47741e5e48
