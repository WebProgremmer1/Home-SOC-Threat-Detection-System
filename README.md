# Home-SOC-Threat-Detection-System


During this project, I learned the basic ideas behind SOC detection and security monitoring. My main goal was to understand how a Security Operations Center can detect suspicious activity, investigate it, and respond to possible attacks.

One of the first concepts I learned was the difference between important SOC metrics. For example, MTTD (Mean Time to Detect) shows how long it takes the security team to notice a threat. MTTR (Mean Time to Respond or Resolve) shows how long it takes to deal with the incident after it has been detected. I also learned about MTTA (Mean Time to Acknowledge), which measures how quickly the security team starts looking at an alert. These metrics are useful because a good SOC should not only detect attacks, but detect and react to them quickly.

I also learned about detection accuracy. A detection system can create a false positive, when normal activity is incorrectly marked as dangerous. It can also create a false negative, when a real attack happens but the system does not detect it. This showed me that creating more alerts does not always mean better security. A SOC needs useful alerts that analysts can actually investigate.

Another area I studied was KPIs and KRIs. KPIs, or Key Performance Indicators, can be used to measure how well the SOC is working. For example, the SOC can track detection time, response time, number of investigated alerts, or percentage of false positives. KRIs, or Key Risk Indicators, are more focused on security risk. They can show whether the organization is becoming more exposed to attacks.

I also learned about Service Level Agreements (SLAs). In a SOC, an SLA can define how quickly an alert should be reviewed or how quickly a critical incident should receive a response. For example, a very serious alert may require investigation within a few minutes, while a lower-risk alert can wait longer.

SOC tools

I studied several types of tools that can be used for SOC detection.

A SIEM (Security Information and Event Management) system collects logs from different devices and systems. The SOC can use these logs to search for suspicious activity and create alerts. SIEM is important because information from computers, firewalls, servers, and applications can be viewed in one place.

I also learned about SOAR (Security Orchestration, Automation and Response). SOAR can automate some repetitive tasks. For example, if a suspicious IP address is detected, the system can automatically collect information about it or start a response process.

For incident investigation, I learned about EDR (Endpoint Detection and Response). EDR watches computers and other endpoints for suspicious behaviour. It can help detect malware, unusual programs, suspicious processes, or strange activity on a user’s computer.

I also looked at firewalls, including traditional firewalls and NGFWs (Next-Generation Firewalls). A traditional firewall can allow or block traffic mainly based on information such as IP addresses and ports. An NGFW can inspect traffic in more detail and understand applications and some types of malicious activity.

Network detection

I learned that firewalls can work at different levels of the network.

A basic firewall can make decisions using information from Layer 3 and Layer 4, such as source IP, destination IP, protocol, and port number. This can be useful for rules such as blocking access to a specific port or preventing traffic from a suspicious IP address.

I also learned about stateful packet inspection. A stateful firewall does not look at every packet completely separately. It keeps information about active network connections and checks whether incoming packets are part of a legitimate connection.

More advanced firewalls can inspect traffic closer to Layer 7, the application layer. This makes it possible to understand protocols such as HTTP and detect activity based on how an application is being used.

A WAF (Web Application Firewall) is more focused on protecting websites and web applications. It inspects HTTP and HTTPS traffic and can detect suspicious web requests. For SOC detection, WAF logs can be useful because they may show attacks against a website before the attacker successfully enters the system.

Email and phishing detection

I also learned the basic process of email communication and how it relates to phishing investigations.

For example, SMTP is commonly used to send email between mail systems. Protocols such as IMAP can be used by the recipient to access email stored on a mail server.

Understanding how email works is useful in a SOC because phishing is one of the most common ways attackers try to enter an organization. During a phishing investigation, an analyst may look at the sender, links, attachments, email headers, domain information, and the behaviour of the user after opening the message.

Threat intelligence

Another concept I learned was threat intelligence. SOC analysts can use information about known malicious IP addresses, domains, URLs, file hashes, or other indicators of compromise.

For example, if a SIEM shows that one of the organization’s computers connected to a known malicious IP address, this could create an alert. The analyst can then investigate which computer made the connection, which user was logged in, and what happened before and after the connection.

Applying the concepts to SOC detection

The biggest thing I learned is that SOC detection is not based on only one tool.

A useful detection may start with a firewall, WAF, EDR, or another security device. Logs from these systems can be sent to the SIEM. The SIEM can compare different events and create an alert. A SOC analyst can then investigate the alert and decide whether it is a real attack or a false positive.

For example, imagine that the EDR detects a suspicious program on a user’s computer. At almost the same time, the firewall shows that the same computer is connecting to an unusual IP address. If the IP address also appears in threat intelligence as malicious, these events together create much stronger evidence of a possible attack.

The analyst could then investigate the incident, block the malicious connection, isolate the computer if necessary, and record how long the process took. After the incident, metrics such as MTTD and MTTR could be reviewed to see how the SOC performed.

Overall, this project helped me understand that SOC detection is a combination of network monitoring, endpoint monitoring, log analysis, threat intelligence, investigation, and response. I also learned that the goal is not simply to create as many alerts as possible. The goal is to create useful detections that help analysts identify real threats quickly while keeping false positives under control.
