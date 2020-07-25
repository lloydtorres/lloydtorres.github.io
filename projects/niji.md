---
layout: project
title: Niji
picoverlay: "/images/projects/niji/niji-logo.png"
color: "#546E7A"
permalink: /projects/niji/
categories:
- projects
tags:
- arduino
- raspberry pi
- android
- node.js
- machine learning
- google cloud platform
description: An all-in-one wearable health device for pets and pet owners. A Waterloo Engineering capstone project.
preview: "/images/projects/niji/niji-preview.png"
prev_banner: "/images/projects/niji/niji-preview.png"
sequence: -60
---

<div class="niji-project">
  <div class="row">
      <div class="col-sm-8">
          <p class="featuretext-md"><strong class="green-emph">Niji</strong> is an all-in-one wearable device for pets and pet owners.</p>
          <p>
              <ul>
                  <li>Lets owners track their pet’s health stats in real time.</li>
                  <li>Detects and warns about health irregularities as soon as they occur.</li>
                  <li>Stores historical biometric data to help vets diagnose conditions.</li>
                  <li>Tracks and recommends activities based on a pet’s weekly schedule.</li>
              </ul>
          </p>

          <p>Niji is a <strong class="green-emph">pet wearable device</strong> designed to assist pet owners in monitoring their pet's health, and to help in training and reinforcing daily routines.</p>
      </div>

      <div class="col-sm-4">
          <img src="/images/projects/niji/niji-model.png" width="230px"/><br />
      </div>
  </div>

  <h1>Motivation</h1>
  <br />
  <div class="row">
      <div class="col-md-offset-1 col-sm-4">
        <div class="col-center">
          <img src="/images/projects/niji/icon-pets.png" width="70px"/>
          <p><strong class="featuretext-lg green-emph">>57%</strong><br /><span class="featuretext-sm">pet ownership in Canadian households</span></p>
        </div>
      </div>
      <div class="col-sm-2"></div>
      <div class="col-sm-4">
        <div class="col-center">
          <img src="/images/projects/niji/icon-piggy-bank.png" width="70px"/>
          <p><strong class="featuretext-lg green-emph">C$6.6 billion</strong><br /><span class="featuretext-sm">spent annually by Canadians on pet care</span></p>
        </div>
      </div>
    </div>

  <h1>Design Overview</h1>

  <p>There are <strong class="green-emph">four subsystems</strong> that work together to power Niji.</p><br />

  <div class="row">
      <div class="col-sm-2">
        <img src="/images/projects/niji/icon-harness.png" width="50px"/><br />
      </div>
      <div class="col-sm-10">
        <p>The <strong class="green-emph">harness</strong> is worn by the pet and houses the wearable circuitry, which measures their health stats.</p>
        <p>
            <ul>
                <li>Powered by wearable Arduino modules.</li>
                <li>Four biometric sensors: accelerometer, GPS, optical heart rate sensor and respiration sensor.</li>
                <li>Communicates to the base station and the app through a Bluetooth Low Energy (BLE) connection.</li>
            </ul>
        </p>
      </div>
  </div>

  <br />

  <div class="row">
      <div class="col-sm-2">
        <img src="/images/projects/niji/icon-base.png" width="50px"/><br />
      </div>
      <div class="col-sm-10">
        <p>The <strong class="green-emph">base station</strong> is kept at home and communicates with the harness when it is nearby.</p>
        <p>
            <ul>
                <li>Raspberry Pi with Bluetooth and Wi-Fi capabilities.</li>
                <li>Accepts raw sensor data from the harness and uploads parsed data to the server.</li>
            </ul>
        </p>
      </div>
  </div>

  <br />

  <div class="row">
      <div class="col-sm-2">
        <img src="/images/projects/niji/icon-server.png" width="50px"/><br />
      </div>
      <div class="col-sm-10">
        <p>The <strong class="green-emph">server</strong> lives in the Google Cloud Platform, where it stores and processes sensor and pet activity data.</p>
        <p>
            <ul>
                <li>The platform's Google BigQuery service stores harness data in a non-relational manner.</li>
                <li><i>k</i>-means clustering algorithm regularly analyzes data for notable patterns to alert owner or recommend schedules.</li>
                <li>Node.js server app exposes processed data to client devices.</li>
            </ul>
        </p>
      </div>
  </div>

  <br />

  <div class="row">
      <div class="col-sm-2">
        <img src="/images/projects/niji/icon-app.png" width="50px"/><br />
      </div>
      <div class="col-sm-10">
        <p>The <strong class="green-emph">Android app</strong> is the main way pet owners can view their pet’s health stats and activities.</p>
        <p>
            <ul>
                <li>Downloads the latest data from the server to ensure owners get their pet’s health stats in real time.</li>
                <li>Outdoor mode lets owners track biometrics directly from the harness while away from home and the base station.</li>
                <li>Data from outdoor mode is synced with the server once the Android app is connected to Wi-Fi or mobile data.</li>
            </ul>
        </p>
      </div>
  </div>

  <h1>About the Project</h1>

    <p>Niji was developed by Ryan Chu, Alan Qu, Yi Sui, Lloyd Torres and Quan Zhang as part of the Waterloo Engineering fourth year capstone design project. Ryan and Quan focused on the hardware and firmware aspects of the project, while Alan, Yi and Lloyd developed the various software components of Niji.</p>

    <p>Niji was built over the course of two university terms (roughly around eight months), and presented to the public at the Waterloo ECE capstone symposium on March 21, 2018.</p>

    <div class="padaround">
      <blockquote class="twitter-tweet" data-lang="en" align="center"><p lang="en" dir="ltr">It’s finally time! Come visit Project Niji at the DC lobby. <a href="https://twitter.com/hashtag/UWCapstone?src=hash&amp;ref_src=twsrc%5Etfw">#UWCapstone</a> <a href="https://twitter.com/hashtag/uwaterloo?src=hash&amp;ref_src=twsrc%5Etfw">#uwaterloo</a> <a href="https://t.co/q1ASrifUMG">pic.twitter.com/q1ASrifUMG</a></p>&mdash; Lloyd Torres (@hznbrgr) <a href="https://twitter.com/hznbrgr/status/976446816353845249?ref_src=twsrc%5Etfw">March 21, 2018</a></blockquote>
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </div>

    <p>This project is dedicated to the memory of Niji and Shadow, two feline friends who accompanied our project consultant Sanjay Singh for many years. Our group chose to name the project after Niji as a reminder of what we strived to accomplish with this project.</p>

    <p><i>Attribution notice: Icons designed by <a href="https://www.flaticon.com/authors/becris">Becris</a>, <a href="https://www.flaticon.com/authors/freepik">Freepik</a>, <a href="https://www.flaticon.com/authors/eucalyp">Eucalyp</a>, <a href="https://www.flaticon.com/authors/gregor-cresnar">Gregor Cresnar</a>, and <a href="https://www.flaticon.com/authors/smashicons">Smashicons</a> from <a href="https://www.flaticon.com/">Flaticon</a>.</i></p>
</div>
