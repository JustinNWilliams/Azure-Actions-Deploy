### Automated CI/CD Pipeline for a Node.js App

**Objective:** To build a complete CI/CD pipeline that automates the deployment of a web application from a GitHub repository to Microsoft Azure, enabling rapid and reliable software delivery.

**Architecture Diagram:**
(Create a diagram showing: Developer pushes to GitHub -> GitHub Actions triggers -> Builds Node.js App -> Deploys to Azure App Service.)

**Technologies Used:**
- GitHub Actions: CI/CD automation engine.
- Azure App Service: Platform as a Service (PaaS) for hosting web applications.
- Azure Service Principal: For secure, automated authentication.
- Node.js & Express: Application framework.
- Git: Version control.

**Implementation Steps:**
1.  **Application & Repo:** Developed a simple Node.js/Express web application and initialized a Git repository, pushing the code to GitHub.
2.  **Azure Provisioning:** Created the necessary cloud infrastructure in Azure, including a Resource Group, a Linux-based App Service Plan (F1 Free Tier), and the App Service instance to host the application.
3.  **Secure Connection:** Generated an Azure Service Principal with scoped permissions and stored its credentials securely as an `AZURE_CREDENTIALS` secret in the GitHub repository.
4.  **Workflow Creation:** Authored a GitHub Actions workflow file (`.github/workflows/main.yml`) that triggers on pushes to the `main` branch. The workflow checks out the code, installs dependencies, logs into Azure using the stored secret, and deploys the application using the `azure/webapps-deploy` action.
5.  **Validation:** Triggered the pipeline by pushing code and verified the successful deployment by accessing the live URL of the Azure App Service.

**Outcome:** This project established a fully automated software delivery pipeline. Any code changes pushed to the main branch are now automatically built and deployed to production, drastically reducing manual effort and the risk of human error.