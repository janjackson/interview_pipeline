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
    a: "We use the following tools for work in DevOps:\r\nI. Jenkins : This is an open source automation server used as a continuous integration tool. We can build,\r\ndeploy and run automated tests with Jenkins.\r\nII. GIT: It is a version control tool used for tracking changes in files and software.\r\nIII. Docker: This is a popular tool for containerization of services. It is very useful in cloud-based deployments.\r\nIV. Nagios: We use Nagios for monitoring of IT infrastructure.\r\nV. Splunk: This isa powerful tool for log search as well as monitoring production systems.\r\nVI. Puppet: We use Puppet to automate our DevOps work so that it is reusable.",
  },
  {
    q: "What are the main benefits of DevOps?",
    a: "What are the main benefits of DevOps?\r\nDevOps is a very popular trend in Software Development. Some of the main benefits of DevOps are as follows:\r\nI. Release Velocity : DevOps practices help in increasing the release velocity. We can release code to production more often and with more confidence.\r\nII. Development Cycle : With DevOps, the complete Development cycle from initial design to production deployment becomes shorter.\r\nIII. Deployment Rollback : In DevOps, we plan for any failure in deployment rollback due to a bug in code or issue in production. This gives confidence in releasing feature without worrying about downtime for rollback.\r\nIV. Defect Detection : With DevOps approach, we can catch defects much earlier than releasing to production. It improves the quality of the software.\r\nV. Recovery from Failure : In case of a failure, we can recover very fast with DevOps process.\r\nVI. Collaboration : With DevOps, collaboration between development and operations professionals increases.\r\nVII. Performance-oriented : With DevOps, organization follows performance-oriented culture in which teams become more productive and more innovative.",
  },
  {
    q: "What is the typical DevOps workflow you use in your organization?",
    a: "The typical DevOps workflow in our organization is as follows:\r\nI. We use Atlassian Jira for writing requirements and tracking tasks.\r\nII. Based on the Jira tasks, developers checkin code into GIT version control system.\r\nIII. The code checked into GIT is built by using Apache Maven.\r\nIV. The build process is automated with Jenkins.\r\nV. During the build process, automated tests run to validate the code checked in by developer.\r\nVI. Code built on Jenkins is sent to organization\u2019s Artifactory.\r\nVII. Jenkins automatically picks the libraries from Artifactory and deploys it to Production.\r\nVIII. During Production deployment Docker images are used to deploy same code on multiple hosts.\r\nIX. Once code is deployed to Production, we use Nagios to monitor the health of production servers.\r\nX. Splunk based alerts inform us of any issues or exceptions in production.\r\n",
  },
];

function escapeToHtml(text) {
  return text.replaceAll("\r\n", "<br>");
}

//todo remove tips which are related to YC
var tips = [
  "Try to have quick and concise answers.",
  "Try to answer in 2 to 3 sentences.",
  "Answer like you would in a conversation, this is not a presentation.",
  "When talking to PG and the other YC partners, be substantive, and get straight to the point.",
  'DO NOT BEAT AROUND THE BUSH. Do not hem and haw. "Uhm"s and "uh"s don&#39;t lend an aura of intelligence.',
  'Use precise and concise language. You aren&#39;t pitching a VC that will ask you what your "secret sauce" is.',
  "He talks quickly, and so do the other YC partners. Try to match their tempo (as you should when talking to anyone).",
];
