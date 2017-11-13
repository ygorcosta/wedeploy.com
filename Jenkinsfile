pipeline {
  agent {
    node {
      label 'lax'
    }
  }
  stages {
    stage('Build Docker image') {
      cd node
      docker.build("wedeploy/wedeploy.com:${env.BRANCH_NAME}-${env.BUILD_ID}")
    }
  }
}
