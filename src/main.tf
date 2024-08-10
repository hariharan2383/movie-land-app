provider "null" {}

# Enable IIS feature
resource "null_resource" "enable_iis" {
  provisioner "local-exec" {
    command = "powershell.exe Enable-WindowsOptionalFeature -Online -FeatureName IIS-WebServerRole -All"
  }
}

# Enable IIS Management Console
resource "null_resource" "enable_iis_mgmt_console" {
  provisioner "local-exec" {
    command = "powershell.exe Enable-WindowsOptionalFeature -Online -FeatureName IIS-WebServerManagementTools -All"
  }
  depends_on = [null_resource.enable_iis]
}
