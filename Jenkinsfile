pipeline {
  agent {
    node {
      label 'lax'
    }
  }
  stages {
    stage('Build Docker image') {
      steps {
        buildStep('Build Docker images') {
          cd node
          docker.build("wedeploy/wedeploy.com:${env.BRANCH_NAME}-${env.BUILD_ID}")
        }
      }
    }
  }
}

void buildStep(String message, Closure closure) {
  try {
    setBuildStatus(message, "PENDING");

    closure();

    setBuildStatus(message, "SUCCESS");
  }
  catch (Exception e) {
    setBuildStatus(message, "FAILURE");
    throw e
  }
}

void setBuildStatus(String message, String state) {
  step([
      $class: "GitHubCommitStatusSetter",
      reposSource: [$class: "ManuallyEnteredRepositorySource", url: "https://github.com/wedeploy/api"],
      contextSource: [$class: "ManuallyEnteredCommitContextSource", context: "ci/jenkins/build-status"],
      errorHandlers: [[$class: "ChangingBuildStatusErrorHandler", result: "UNSTABLE"]],
      statusResultSource: [ $class: "ConditionalStatusResultSource", results: [[$class: "AnyBuildResult", message: message, state: state]] ]
  ]);
}
