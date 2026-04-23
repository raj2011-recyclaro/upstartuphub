## GitHub Actions secrets for Lambda deploy

Add these repository secrets in GitHub before running the workflow:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`
- `AWS_LAMBDA_FUNCTION_NAME`

Recommended IAM permissions for the deploy user:

- `lambda:UpdateFunctionCode`
- `lambda:GetFunction`

Optional but useful:

- `lambda:UpdateFunctionConfiguration`

This workflow deploys only the backend in `server/` when you push changes to `main`.
