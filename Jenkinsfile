pipeline {
  agent any

  tools {
    nodejs "node-8.9.4"
  }

  stages {
    
    stage('Prep') {
      steps {
        sh "yarn install"
      }
    }

    stage('Build') {
      steps {
        sh "yarn build"
      }
    }

  }
}