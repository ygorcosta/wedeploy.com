---
title: "Environment Variables"
description: "Use environment variables to control your app."
headerTitle: "Auth"
layout: "guide"
weight: 7
---

### {$page.title}

###### {$page.description}

<aside>

###### <span class="icon-16-alert"></span> Attention

If you are unfamiliar with how you can apply and manage your secret keys, please visit our [Environment Variables](/docs/intro/environment-variables.html) page.

</aside>

<article id="1">

## Reference

Here is a list of all the environment variable keys you can use with this service.

<div class="table-container">

| Key | Description |
| - | - |
| WEDEPLOY_AUTH_EMAIL_CONTENT | HTML code for password reset email |
| WEDEPLOY_AUTH_EMAIL_SENDER | Set password reset email sender |
| WEDEPLOY_AUTH_EMAIL_SUBJECT | Set password reset email subject |
| WEDEPLOY_AUTH_FACEBOOK | Enable Facebook Auth integration |
| WEDEPLOY_AUTH_FACEBOOK_CLIENT_ID | Facebook OAuth ID |
| WEDEPLOY_AUTH_FACEBOOK_CLIENT_SECRET | Facebook OAuth password |
| WEDEPLOY_AUTH_GITHUB | Enable GitHub Auth integration |
| WEDEPLOY_AUTH_GITHUB_CLIENT_ID | GitHub OAuth ID |
| WEDEPLOY_AUTH_GITHUB_CLIENT_SECRET | GitHub OAuth password |
| WEDEPLOY_AUTH_GOOGLE | Enable Google Auth integration |
| WEDEPLOY_AUTH_GOOGLE_CLIENT_ID | Google OAuth ID |
| WEDEPLOY_AUTH_GOOGLE_CLIENT_SECRET | Google OAuth password |
| WEDEPLOY_AUTH_PASSWORD | Enable email and password Auth |
| WEDEPLOY_AUTH_SECURE_FIELDS | Select which Auth fields are secured |

</div>

**Check the [boilerplate-auth](https://github.com/wedeploy/boilerplate-auth/blob/js/auth/container.json) for a practical example.**

</article>
