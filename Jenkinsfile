pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
        terraform 'Terraform'
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
                bat 'robocopy build C:\\inetpub\\wwwroot\\movieland /mir || exit /b 0'
                bat 'iisreset /restart'
    }
}
        stage('Infrastructure automation with Terraform') {
            steps {
                dir('C:/Users/SriHariharan/Desktop/movie-land-app/movieland/src') {
                    script {
                        bat 'terraform init'
                        bat 'terraform apply -auto-approve'
                    }
                }
            }

    }
}
}
