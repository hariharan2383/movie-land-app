pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {
        stage('Checkout') {
            steps {
                // Specify the branch explicitly
                git branch: 'main', url: 'https://github.com/hariharan2383/movie-land-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                bat 'robocopy build C:\\inetpub\\wwwroot\\movieland /mir'
                bat 'iisreset /restart'
            }
        }
    }
}
