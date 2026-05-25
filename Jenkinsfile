pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                echo 'Building Application'
            }
        }

        stage('Test') {
            steps {
                echo 'Running Test Cases'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying to Production Server'
            }
        }

    }

    post {
        success {
            echo 'Pipeline Executed Successfully'
        }

        failure {
            echo 'Pipeline Failed'
        }
    }
}
