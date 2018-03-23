---
title: "A Smarter and Better CLI"
description: "We have some exciting improvements on our command line interface (CLI) to share with you, as well as a look into the future of this tool."
date: "Mar 23, 2018"
author: "Henrique Vicente"
layout: "blog"
---

<article>

{$page.description}

#### Why Smarter?

In the past, we have required many flags like `--project` or `--service` to make actions on our CLI. Now we are introducing a smarter, more interactive way of performing tasks from your terminal.

Before, in order do things like `scale` you would need to pass this whole command:

```
we scale --project notebook --service notes 4
```

Now, you can simply enter `we scale 4` and an interactive process will begin where you can declare your project and service.

<figure>
  <img src="/images/blog/post-24--1.gif" alt="Interactive CLI">
</figure>

This powerful feature is available for nearly all commands. So what are you waiting for? Go to your command line, type something like `we deploy` or `we env` and sip on a cold beer as we prompt you through the rest of the process.

#### Why Better?

Many of the features that are currently available on the web console, like creating new services and projects, are not yet on the CLI. Well, not until today!

That's right, now you can simply run `we new` to create a new project and even start installing new services right from the comfort of your terminal.

<figure>
  <img src="/images/blog/post-24--2.gif" alt="We New command">
</figure>

Like the others above, the `we new` command come with the beautiful new step-by-step user experience. You don't need to memorize any flags or even the IDs of your project. Just type `we new` and we will walk you through the rest.

#### The Future?

The future is very important to us. We cannot sacrifice our quality in a desire for rapid development. It is important that both are united so we can deliver you the highest quality software in the most timely manner.

With that in mind, we wanted to share with you a few things we have planned and how we are working towards raising the bar in developer experience.

**New Commands**

Many of our users have requested the ability to access their containers in a Linux shell. To do this, we are working on the `we exec` and `we ssh` commands.

These will open up many doors to do things like debug and automate applications, migrate data and setup customized continuous integration.

**Better Installation**

Installing the WeDeploy CLI is a step we don't take lightly. We've come a long way since the beginning, but we have plans to help make this part of getting started even easier for Windows and macOS users.

**Informative Updates**

Currently, when you run `we update` we just install the newest changes to the CLI. Soon we will show you a list of changes when you run this command.

We hope you are as excited as we are about the new WeDeploy CLI development.

---

If you have any ideas or questions that you would like to share with us, feel free to **[join our community](https://chat.wedeploy.com/)** or **[follow us on Twitter](https://twitter.com/wedeploy)**.

</article>
