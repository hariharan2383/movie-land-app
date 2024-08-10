pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/hariharan2383/movie-land-app.git'
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
                bat 'xcopy /s /e /y build\\* C:\\inetpub\\wwwroot\\movieland\\'
                bat 'iisreset /restart'
            }
        }
    }
}