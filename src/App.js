import logo from './logo.svg';
import './App.css';
import ListCard from './components/ListCard';
import BasicInfo from './components/BasicInfo';
import InfoCard from './components/InfoCard';
import HeadLine from './components/HeadLine';
import SkillBox from './components/SkillBox';
import ProjectList from './components/ProjectList';
import imgURL from './pic/Q1.jpg';

function App() {
  const workExperiences = [
    {
    id:'Alibaba Group', 
    period:'2018-2019', 
    position:'Product Designer', 
    text1:'Designed new product features to increase product traffic and improve conversion rates.', 
    text2:'Define the key product performance indicators in the areas of retention and/or growth.'
    },
    {
    id:'JD.com, Inc.', 
    period:'2016-2018', 
    position:'Product Designer', 
    text1:'Designed and refined functionalities to improve user experience by analising user data and results of user engagement studies to pinpoint bottlenecks.', 
    text2:'Designed A/B tests for features and analyzed the results.', 
    },
  ];

  const projectList = [
    {name:'Admin Dashboard - Indigenous Friends', period:'2022-2022', position:'Programmer （volunteer）',text:'Developed the admin dashboard of Indigenous Friends using React.js and Tailwind.'},
  ];

  const personalInfo = [
    {name:'Xie He',tel:'6478638888',email:'xiehe0620@gmail.com',location:'Toronto'},
  ]

  const education = [
    {university:'York University',major:'Information Technology',scholarship:'York University International Scholarship of Merit, York University Continuing Student Scholarship',GPA:'3.8/4.0'}
  ]

  const skills = [
    {text:'JAVA'},
    {text:'JavaScript'},
    {text:'React.js'},
    {text:'SQL'},
  ]

  return (
    <div class = "flex container mx-auto text-indigo-400">      
      <div class = " bg-indigo-300  p-8 w-1/4">
      <div class = "float-right">
        <h1 class = "text-4xl font-extrabold text-indigo-400">Xie He's <br/>Resume</h1>
        <div class = "m-8">
                <img class = "w-24" src = {imgURL}></img>
        </div>
        <div>
          <BasicInfo content = {personalInfo}/>
        </div>
      </div>
      </div>
    
      <div class = "bg-blue-100 w-3/4  p-8">
      <div class = "float-left">
        <div><HeadLine content = 'EDUCATION'/></div>
        <div><InfoCard content = {education}/></div>
        <div><HeadLine content = 'SKILLS'/></div>
        <div><SkillBox content = {skills}/></div>
        <div><HeadLine content = 'PROJECTS'/></div>
        <div><ProjectList content = {projectList}/></div>
        <div><HeadLine content = 'WORK EXPERIENCES'/></div>
        <div><ListCard content = {workExperiences}/></div>
      </div>
      </div>
    </div>
  );
};

export default App;

