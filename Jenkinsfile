pipeline {
  agent any
  tools {nodejs "nodejs"}
  stages {
    //   stage('Git') {
    //   steps {
    //     git 'https://github.com/sri-soumya/bstack-1'
    //   }
    // }
      stage('build') {
        steps {
            browserstack(credentialsId: 'df0d19ba-e354-40e2-b22d-47b21e44d974') {
                // add commands to run test
                // Following are some of the example commands -----
                sh 'npm install'
                sh 'npm run sample-test'
            }
            browserStackReportPublisher 'automate'
        }
      }
    }
  }
