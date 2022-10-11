import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import "./MoreAbout.css";

function TabPanel(props) {
    const theme = useTheme();
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    textAlign:'left',
    [theme.breakpoints.down('sm')]:{
        width:"50%",
    }
  },
  tabvalue:{
    paddingLeft:"10px",
    [theme.breakpoints.down('sm')]:{
        width:"50%",
    }
  },
  tab:{
    textAlign:"left"
  }
}));
const Educations = [
	{ type: "UNDERGRADUATE", school: "CSE | IIT Jodhpur | 2021", marks: "CGPA: 6.91/10" },
	{ type: "INTERMEDIATE", school: "JNV Rangareddy | CBSE | 2017", marks: "Percentage: 87.4%" },
	{ type: "HIGH SCHOOL", school: "JNV Meerut | CBSE | 2015", marks: "CGPA: 9.6/10" },
];

const Skills = [
	{
		type: "PROGRAMMING LANGUAGES",
		value: "C/C++, Python, C#, JavaScript, HTML, CSS, MySQL",
	},
	{
		type: "FRAMEWORK/LIBRARIES",
		value: "ReactJs, NodeJs, . Net(C#)",
	},
	{
		type: "UTILITIES",
		value: "ANdroid Studio, Visual Studio, Visual Studio Code",
	},
	{
		type: "OS",
		value: "Window, Linux",
	},
];

const Coursework = [
	"Discrete Mathematics",
	"Data Structures & Algorithms",
	"Computer Organization and Architecture",
	"Object-Oriented Analysis & Design",
	"Software Engineering",
	"Algorithm Design & Analysis",
	"Operating Systems",
	"Compiler Design",
	"Data Communication",
	"Database",
	"Artificial intelligence",
	"Computer Networking",
	"Security and its Application",
];

const Achievements = [
	{
		type: "Competitive Coding Profile",
		value: [
			"Rated 4-stars on CodeChef with 1868 points.",
			"Ranked 59/4300+ globally in September Mega Cook-Off 2019 Division 2 of Codechef.",
            "Batch rank 3rd in Intra college coding contest DHPC.",
            " Qualified till pre-elimination in Snackdown 2018."
		],
	},
    {
        type:"Certificates/Participation",
        value:[
            "Qualified as CS subject expert on chegg.com(online paid question/answersite).","Participated in code.fun.do 2018","Been Member of ”Youth Parliament” which stood first in the 17th National Youth Parliament Competition organized by Ministry(2013-2014)."
        ]
    }
];

const Extracurricular = [
	"Volunteer in public charitable foundation DAKSHANA for conducting entrance tests across India every year.",
	"Assistant head in college fest IGNUS IIT Jodhpur 2019.",
];
  export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
		<div className={classes.root}>
			<Tabs
				orientation="vertical"
				variant="scrollable"
				value={value}
				onChange={handleChange}
				className={classes.tabs}>
				<Tab className={classes.tab} label="Education" {...a11yProps(0)} />
				<Tab className='tab' label="Skills" {...a11yProps(1)} />
				<Tab className='tab' label="Coursework" {...a11yProps(2)} />
				<Tab className='tab' label="Achievements" {...a11yProps(3)} />
				<Tab className='tab' label="EXTRACURRICULAR" {...a11yProps(4)} />
			</Tabs>
			<TabPanel value={value} index={0} className={classes.tabvalue}>
				{Educations.map((item) => (
					<div className='bodyData'>
						<Typography className='tabHeading'>{item.type}</Typography>
						<Typography className='tabBody'>{item.school}</Typography>
						<Typography className='tabBody'>{item.marks}</Typography>
					</div>
				))}
			</TabPanel>
			<TabPanel value={value} index={1} className={classes.tabvalue}>
				{Skills.map((item) => (
					<div className='bodyData'>
						<Typography className='tabHeading'>{item.type}</Typography>
						<Typography className='tabBody'>{item.value}</Typography>
					</div>
				))}
			</TabPanel>
			<TabPanel value={value} index={2} className={classes.tabvalue}>
				{Coursework.map((item) => (
					<div>
						<Typography className='tabBody'>{item}</Typography>
					</div>
				))}
			</TabPanel>
			<TabPanel value={value} index={3} className={classes.tabvalue}>
				{Achievements.map((item) => (
					<div className='bodyData'>
						<Typography className='tabHeading'>{item.type}</Typography>
						{item.value.map((item1) => (
							<Typography className='tabBody'>{item1}</Typography>
						))}
					</div>
				))}
			</TabPanel>
			<TabPanel value={value} index={4} className={classes.tabvalue}>
				{Extracurricular.map((item) => (
					<div>
						<Typography className='tabBody'>{item}</Typography>
					</div>
				))}
			</TabPanel>
		</div>
	);
}
