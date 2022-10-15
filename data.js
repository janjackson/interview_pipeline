// Questions. It seems like these are questions which are not used currently
var q = [
  "What are the popular DevOps tools that you use?",
  "What are the main benefits of DevOps?",
  "What is the typical DevOps workflow you use in your organization?",
];

// use https://www.freeformatter.com/javascript-escape.html#before-output to translate from free text to js escape characters
var qa = [
  {
    q: "What are the popular DevOps tools that you use?",
    a: "We use following tools for work in DevOps:\r\n\r\nI. Jenkins : This is an open source automation server used as a continuous integration tool. We can build, deploy and run automated tests with Jenkins.\r\n\r\nII. GIT : It is a version control tool used for tracking changes in files and software.\r\n\r\nIII. Docker : This is a popular tool for containerization of services. It is very useful in Cloud based deployments.\r\n\r\nIV. Nagios : We use Nagios for monitoring of IT infrastructure.\r\n\r\nV. Splunk : This is a powerful tool for log search as well as monitoring production systems.\r\n\r\nVI. Puppet : We use Puppet to automate our DevOps work so that it is reusable.",
  },
  {
    q: "What are the main benefits of DevOps?",
    a: "DevOps is a very popular trend in Software Development. Some of the main benefits of DevOps are as follows:\r\n\r\nI. Release Velocity : DevOps practices help in increasing the release velocity. We can release code to production more often and with more confidence.\r\n\r\nII. Development Cycle : With DevOps, the complete Development cycle from initial design to production deployment becomes shorter.\r\n\r\nIII. Deployment Rollback : In DevOps, we plan for any failure in deployment rollback due to a bug in code or issue in production. This gives confidence in releasing feature without worrying about downtime for rollback.\r\n\r\nIV. Defect Detection : With DevOps approach, we can catch defects much earlier than releasing to production. It improves the quality of the software.\r\n\r\nV. Recovery from Failure : In case of a failure, we can recover very fast with DevOps process.\r\n\r\nVI. Collaboration : With DevOps, collaboration between development and operations professionals increases.\r\n\r\nVII. Performance-oriented : With DevOps, organization follows performance-oriented culture in which teams become more productive and more innovative.",
  },
  {
    q: "What is the typical DevOps workflow you use in your organization?",
    a: "The typical DevOps workflow in our organization is as follows:\r\n\r\nI. We use Atlassian Jira for writing requirements and tracking tasks.\r\n\r\nII. Based on the Jira tasks, developers checkin code into GIT version control system.\r\n\r\nIII. The code checked into GIT is built by using Apache Maven.\r\n\r\nIV. The build process is automated with Jenkins.\r\n\r\nV. During the build process, automated tests run to validate the code checked in by developer.\r\n\r\nVI. Code built on Jenkins is sent to organization\u2019s Artifactory.\r\n\r\nVII. Jenkins automatically picks the libraries from Artifactory and deploys it to Production.\r\n\r\nVIII. During Production deployment Docker images are used to deploy same code on multiple hosts.\r\n\r\nIX. Once code is deployed to Production, we use Nagios to monitor the health of production servers.\r\n\r\nX. Splunk based alerts inform us of any issues or exceptions in production.\r\n",
  },
];

function escapeToHtml(text) {
  return text.replaceAll("\r\n", "<br>");
}

// list of all tips
var tips = [
  "Try to have quick and concise answers.",
  "Try to structure your answers",
  "Answer like you would in a conversation, this is not a presentation.",
  "When talking to your interviewer, be substantive, and get straight to the point.",
  'DO NOT BEAT AROUND THE BUSH. Do not hem and haw. "Uhm"s and "uh"s don&#39;t lend an aura of intelligence.',
];
