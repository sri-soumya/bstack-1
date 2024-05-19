pipeline {
  agent any
  stages {
      stage('setup') {
        steps {
            browserstack(credentialsId: 'df0d19ba-e354-40e2-b22d-47b21e44d974') {
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
