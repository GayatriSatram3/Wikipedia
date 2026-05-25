pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Building Website'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing Website'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deployment Completed'
            }
        }

    }
}
