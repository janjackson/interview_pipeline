// Questions. It seems like these are questions which are not used currently
var q = [
  "What are the popular DevOps tools that you use?",
  "What are the main benefits of DevOps?",
  "What is the typical DevOps workflow you use in your organization?",
  "How do you take DevOps approach with Amazon Web Services?",
  "How will you run a script automatically when a developer commits a change into GIT?",
  "What are the main features of AWS OpsWorks Stacks?",
  "How does CloudFormation work in AWS?",
  "What is CICD in DevOps?",
  "What are the best practices of Continuous Integration (CI)?",
  "What are the benefits of Continuous Integration (CI)?",
  "What are the options for security in Jenkins?",
  "What are the main benefits of Chef?",
  "What is the architecture of Chef?",
  "What is a Recipe in Chef?",
  "What are the main benefits of Ansible?",
  "What are the main use cases of Ansible?",
  "What is Docker Hub?",
  "What is your favorite scripting language for DevOps?",
  "What is Multi-factor authentication?",
  "What are the main benefits of Nagios?",
  "What is State Stalking in Nagios?",
  "What are the main features of Nagios?",
  "What is Puppet?",
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
  {
    q: "How do you take DevOps approach with Amazon Web Services?",
    a: "Amazon Web Services (AWS) provide many tools and features to deploy and manage applications in AWS. As per DevOps, we treat infrastructure as code. We mainly use following two services from AWS for DevOps:\r\n\r\nI. CloudFormation : We use AWS CloudFormation to create and deploy AWS resources by using templates. We can describe our dependencies and pass special parameters in these templates. CloudFormation can read these templates and deploy the application and resources in AWS cloud.\r\n\r\nII. OpsWorks : AWS provides another service called OpsWorks that is used for configuration management by utilizing Chef framework. We can automate server configuration, deployment and management by using OpsWorks. It helps in managing EC2 instances in AWS as well as any on-premises servers.",
  },
  {
    q: "How will you run a script automatically when a developer commits a change into GIT?",
    a: "GIT provides the feature to execute custom scripts when certain event occurs in GIT. This feature is called hooks.\r\n\r\nWe can write two types of hooks.\r\nI. Client-side hooks\r\nII. Server-side hooks\r\n\r\nFor this case, we can write a Client-side post-commit hook. This hook will execute a custom script in which we can add the message and code that we want to run automatically with each commit.",
  },
  {
    //#6
    q: "What are the main features of AWS OpsWorks Stacks?",
    a: "Some of the main features of AWS OpsWorks Stacks are as follows:\r\n\r\nI. Server Suppo rt: AWS OpsWorks Stacks we can automate operational tasks on any server in AWS as well\r\nas our own data center.\r\n\r\nII. Scalable Automation : We get automated scaling support with AWS OpsWorks Stacks. Each new instance\r\nin AWS can read configuration from OpsWorks. It can even respond to system events in same way as other\r\ninstances do.\r\n\r\nIII. Dashboard : We can create dashboards in OpsWorks to display the status of all the stacks in AWS.\r\n\r\nIV. Configuration as Code : AWS OpsWorks Stacks are built on the principle of \u201CConfiguration as Code\u201D. We\r\ncan define and maintain configurations like application source code. Same configuration can be replicated on multiple servers and environments.\r\n\r\nV. Application Support : OpsQorks supports almost all kinds of applications. So it is universal in nature.",
  },
  {
    q: "How does CloudFormation work in AWS?",
    a: "AWS CloudFormation is used for deploying AWS resources.\r\n\r\nIn CloudFormation, we have to first create a template for a resource. A template is a simple text file that contains information about a stack on AWS. A stack is a collection of AWS resourced that we want to deploy together in an AWS as a group.\r\n\r\nOnce the template is ready and submitted to AWS, CloudFormation will create all the resources in the template. This helps in automation of building new environments in AWS.",
  },
  {
    q: "What is CICD in DevOps?",
    a: "CICD stands for Continuous Integration and Continuous Delivery. These are two different concepts that are complementary to each other.\r\n\r\nContinuous Integration (CI) : In CI all the developer work is merged to main branch several times a day. This helps in reducing integration problems.\r\n\r\nIn CI we try to minimize the duration for which a branch remains checked out. A developer gets early feedback on the new code added to main repository by using CI.\r\n\r\nContinuous Delivery (CD) : In CD, a software team plans to deliver software in short cycles. They perform development, testing and release in such a short time that incremental changes can be easily delivered to production.\r\n\r\nIn CD, as a DevOps we create a repeatable deployment process that can help achieve the objective of Continuous Delivery.\r\n",
  },
  {
    q: "What are the best practices of Continuous Integration (CI)?",
    a: "Some of the best practices of Continuous Integration (CI) are as follows:\r\n\r\nI. Build Automation : In CI, we create such a build environment that even with one command build can be triggered. This automation is done all the way up to deployment to Production environment.\r\n\r\nII. Main Code Repository : In CI, we maintain a main branch in code repository that stores all the Production ready code. This is the branch that we can deploy to Production any time.\r\n\r\nIII. Self-testing build : Every build in CI should be self-tested. It means with every build there is a set of tests that runs to ensure that changes are of high quality.\r\n\r\nIV. Every day commits to baseline : Developers will commit all of theirs changes to baseline everyday. This ensures that there is no big pileup of code waiting for integration with the main repository for a long time.\r\n\r\nV. Build every commit to baseline : With Automated Continuous Integration, every time a commit is made into baseline, a build is triggered. This helps in confirming that every change integrates correctly.\r\n\r\nVI. Fast Build Process : One of the requirements of CI is to keep the build process fast so that we can quickly\r\nidentify any problem.\r\n\r\nVII. Production like environment testing : In CI, we maintain a production like environment also known as pre-production or staging environment, which is very close to Production environment. We perform testing in this environment to check for any integration issues.\r\n\r\nVIII. Publish Build Results : We publish build results on a common site so that everyone can see these and take corrective actions.\r\n\r\nIX. Deployment Automation : The deployment process is automated to the extent that in a build process we can add the step of deploying the code to a test environment. On this test environment all the stakeholders can access and test the latest delivery.",
  },
  {
    q: "What are the benefits of Continuous Integration (CI)?",
    a: "The benefits of Continuous Integration (CI) are as follows:\r\n\r\nI. CI makes the current build constantly available for testing, demo and release purpose.\r\n\r\nII. With CI, developers write modular code that works well with frequent code check-ins.\r\n\r\nIII. In case of a unittest failure or bug, developer can easily revert back to the bug-free state of the code.\r\n\r\nIV. There is drastic reduction in chaos on release day with CI practices.\r\n\r\nV. With CI, we can detect Integration issues much earlier in the process.\r\n\r\nVI. Automated testing is one very useful side effect of implementing CI.\r\n\r\nVII. All the stakeholders including business partners can see the small changes deployed into pre-production environment. This provides early feedback on the changes to software.\r\n\r\nVIII. Automated CI and testing generates metrics like code-coverage, code complexity that help in improving the development process.",
  },
  {
    q: "What are the options for security in Jenkins?",
    a: "In Jenkins, it is very important to make the system secure by setting user authentication and authorization. To do this we have to do following:\r\n\r\nI. First we have to set up the Security Realm. We can integrate Jenkins with LDAP server to create user authentication.\r\n\r\nII. Second part is to set the authorization for users. This determines which user has access to what resources.\r\n\r\nIn Jenkins some of the options to setup security are as follows:\r\n\r\nI. We can use Jenkins\u2019 own User Database.\r\n\r\nII. We can use LDAP plugin to integrate Jenkins with LDAP server.\r\n\r\nIII. We can also setup Matrix based security on Jenkins.",
  },
  {
    q: "What are the main benefits of Chef?",
    a: "Chef is an automation tool for keeping infrastructure as code. It has many benefits. Some of these are as follows:\r\n\r\nI. Cloud Deployment : We can use Chef to perform automated deployment in Cloud environment.\r\n\r\nII. Multi-cloud support : With Chef we can even use multiple cloud providers for our infrastructure.\r\n\r\nIII. Hybrid Deployment : Chef supports both Cloud based as well as datacenter-based infrastructure.\r\n\r\nIV. High Availability : With Chef automation, we can create high availability environment. In case of hardware\r\nfailure, Chef can maintain or start new servers in automated way to maintain highly available environment.",
  },
  {
    q: "What is the architecture of Chef?",
    a: "Chef is composed of many components like Chef Server, Client etc. Some of the main components in Chef are as follows:\r\n\r\nI. Client : These are the nodes or individual users that communicate with Chef server.\r\n\r\nII. Chef Manage : This is the web console that is used for interacting with Chef Server.\r\n\r\nIII. Load Balancer : All the Chef server API requests are routed through Load Balancer. It is implemented in Nginx.\r\n\r\nIV. Bookshelf : This is the component that stores cookbooks. All the cookbooks are stored in a repository. It is separate storage from the Chef server.\r\n\r\nV. PostgreSQL : This is the data repository for Chef server.\r\n\r\nVI. Chef Server : This is the hub for configuration data. All the cookbooks and policies are stored in it. It can scale to the size of any enterprise.",
  },
  {
    q: "What is a Recipe in Chef?",
    a: "In any organization, Recipe is the most fundamental configuration element. It is written in Ruby language. It is a collection of resources defined by using patterns.\r\n\r\nA Recipe is stored in a Cookbook and it may have dependency on other Recipe. We can tag Recipe to create some kind of grouping.\r\n\r\nWe have to add a Recipe in run-list before using it by chef-client.\r\n\r\nIt always maintains the execution order specified in run-list.",
  },
  {
    q: "What are the main benefits of Ansible?",
    a: "Ansible is a powerful tool for IT Automation for large scale and complex deployments. It increases the productivity of team.\r\n\r\nSome of the main benefits of Ansible are as follows:\r\nI. Productivity : It helps in delivering and deploying with speed. It increases productivity in an organization.\r\n\r\nII. Automation : Ansible provides very good options for automation. With automation, people can focus on delivering smart solutions.\r\n\r\nIII. Large-scale : Ansible can be used in small as well as very large-scale organizations.\r\n\r\nIV. Simple DevOps : With Ansible, we can write automation in a human-readable language. This simplifies the task of DevOps.\r\n",
  },
  {
    q: "What are the main use cases of Ansible?",
    a: "Some of the popular use cases of Ansible are as follows:\r\nI. App Deployment : With Ansible, we can deploy apps in a reliable and repeatable way.\r\n17.\r\n\r\nII. Configuration Management : Ansible supports the automation of configuration management across multiple environments.\r\n\r\nIII. Continuous Delivery : We can release updates with zero downtime with Ansible.\r\n\r\nIV. Security : We can implement complex security policies with Ansible.\r\n\r\nV. Compliance : Ansible helps in verifying and organization\u2019s systems in comparison with the rules and regulations.\r\n\r\nVI. Provisioning : We can provide new systems and resources to other users with Ansible.\r\n\r\nVII. Orchestration : Ansible can be used in orchestration of complex deployment in a simple way.",
  },
  {
    q: "What is Docker Hub?",
    a: "Docker Hub is a cloud-based registry. We can use Docker Hub to link code repositories. We can even build images and store them in Docker Hub. It also provides links to Docker Cloud to deploy the images to our hosts.\r\n\r\nDocker Hub is a central repository for container image discovery, distribution, change management, workflow automation and team collaboration.",
  },
  {
    q: "What is your favorite scripting language for DevOps?",
    a: "In DevOps, we use different scripting languages for different purposes. There is no single language that can work in all the scenarios. Some of the popular scripting languages that we use are as follows:\r\n\r\nI. Bash : On Unix based systems we use Bash shell scripting for automating tasks.\r\n\r\nII. Python : For complicated programming and large modules we use Python. We can easily use a wide variety of standard libraries with Python.\r\n\r\nIII. Groovy : This is a Java based scripting language. We need JVM installed in an environment to use Groovy. It is very powerful and it provides very powerful features.\r\n\r\nIV. Perl : This is another language that is very useful for text parsing. We use it in web applications.",
  },
  {
    q: "What is Multi-factor authentication?",
    a: "In security implementation, we use Multi-factor authentication (MFA). In MFA, a user is authenticated by multiple means before giving access to a resource or service. It is different from simple user/password based authentication.\r\n\r\nThe most popular implementation of MFA is Two-factor authentication. In most of the organizations, we use username/password and an RSA token as two factors for authentication.\r\n\r\nWith MFA, the system becomes more secure and it cannot be easily hacked.",
  },
  {
    q: "What are the main benefits of Nagios?",
    a: "Nagios is open source software to monitor systems, networks and infrastructure. The main benefits of Nagios are as follows:\r\n\r\nI. Monitor : DevOps can configure Nagios to monitor IT infrastructure components, system metrics and network protocols.\r\n\r\nII. Alert : Nagios will send alerts when a critical component in infrastructure fails.\r\n\r\nIII. Response : DevOps acknowledges alerts and takes corrective actions.\r\n\r\nIV. Report : Periodically Nagios can publish/send reports on outages, events and SLAs etc.\r\n\r\nV. Maintenance: During maintenance windows, we can also disable alerts.\r\n\r\nVI. Planning : Based on past data, Nagios helps in infrastructure planning and upgrades.",
  },
  {
    q: "What is State Stalking in Nagios?",
    a: "State Stalking is a very useful feature. Though all the users do not use it all the time, it is very helpful when we want to investigate an issue.\r\n\r\nIn State Stalking, we can enable stalking on a host. Nagios will monitor the state of the host very carefully and it will log any changes in the state.\r\n\r\nBy this we can identify what changes might be causing an issue on the host.",
  },
  {
    q: "What are the main features of Nagios?",
    a: "Some of the main features of Nagios are as follows:\r\n\r\nI. Visibility : Nagios provides a centralized view of the entire IT infrastructure.\r\n\r\nII. Monitoring : We can monitor all the mission critical infrastructure components with Nagios.\r\n\r\nIII. Proactive Planning : With Capacity Planning and Trending we can proactively plan to scale up or scale down the infrastructure.\r\n\r\nIV. Extendable : Nagios is extendable to a third party tools in APIs.\r\n\r\nV. Multi-tenant : Nagios supports multi-tenants architecture.",
  },
  {
    q: "What is Puppet?",
    a: "Puppet Enterprise is a DevOps software platform that is used for automation of infrastructure operations. It runs on Unix as well as on Windows.\r\n\r\nWe can define system configuration by using Puppet\u2019s language or Ruby DSL.\r\n\r\nThe system configuration described in Puppet\u2019s language can be distributed to a target system by using REST API calls.",
  },
  /* empty for extending
  {
    q: "",
    a: "",
  },
  */
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
