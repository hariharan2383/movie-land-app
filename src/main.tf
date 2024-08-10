terraform {
  required_providers {
    windows = {
      source  = "terraform-providers/windows"
      version = "~> 0.1"
    }
  }
}

provider "windows" {}

# Enable IIS feature
resource "windows_feature" "iis" {
  name = "Web-Server"
}

# Enable IIS Management Console
resource "windows_feature" "iis_mgmt_console" {
  name = "Web-Mgmt-Console"
}

# Create a new IIS website
resource "windows_iis_website" "movieland" {
  name           = "movieland"
  physical_path  = "C:\\inetpub\\wwwroot\\movieland"
  binding {
    port = 80
  }
  depends_on = [windows_feature.iis]
}