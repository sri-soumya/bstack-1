pipeline {
  agent any
  stages {
      stage('setup') {
        steps {
            browserstack(credentialsId: '<credential_ID>') {
                // add commands to run test
                // Following are some of the example commands -----
                sh 'npm install'
                sh 'browserstack-node-sdk jest src/sample.test.js'
            }
            browserStackReportPublisher 'automate'
        }
        # ...
      }
    }
  }
