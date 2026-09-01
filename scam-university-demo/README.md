# Scam University Login Training Demo

This is a local-only cyber awareness demo. It does not collect credentials, store credentials, or send requests to a real university website.

## Open the demo

Open `index.html` in a browser.

## Demo account

- Username: `student.demo`
- Password: `training-only`

Any other input is blocked with a safety message.

## Local training log

The page records safe training events in your browser's `localStorage`.

It stores:

- Attempt time
- Sanitized username label
- Result, such as `demo-login-accepted` or `blocked-non-demo-input`

It does not store passwords, send requests, or contact any real login service.

Use **Export CSV** to download the local log. Use **Clear** to delete it from this browser.

## Safe training workflow

1. Get written authorization before running any security awareness exercise.
2. Use fake branding, a fake domain, and dummy credentials.
3. Tell participants after the exercise what warning signs they missed.
4. Use an approved phishing simulation platform or a test identity-provider tenant if you need campaign analytics.

Do not forward usernames or passwords to a real login service. That can expose accounts, violate policy, and harm people.
