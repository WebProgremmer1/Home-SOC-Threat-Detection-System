# Home-SOC-Threat-Detection-System


![SOC Threat Detection System](https://github.com/WebProgremmer1/Home-SOC-Threat-Detection-System/blob/main/website.png?raw=true)


# Email Security Analysis

Just want to show which steps i considered before concluding this email is more likely some sort of social engineering attack. 

## Authentication Indicators

**Interesting Finding:** `spf=pass`

### SPF 

**What it means:**  
The sending IP `149.72.142.11` was authorized to send emails for the domain.

### DKIM 

**Finding:**  
`dkim=pass` for `namecheap.com` and `sendgrid.info`

**What it means:**  
The DKIM signatures are valid, meaning the message passed the integrity check and was not modified after being signed.


### DMARC 

**Finding:**  
`dmarc=pass`

**What it means:**  
The visible `From` domain passed DMARC alignment. This makes simple sender-domain spoofing less likely.


### Sender Address

**Finding:**  
`Namecheap Renewals <renewals@namecheap.com>`

**What it means:**  
The sender address matches the authenticated `namecheap.com` domain. There is no obvious mismatch between the sender and authenticated domain.


---

### Return Path

**Finding:**  
`...@mailserviceemailout1.namecheap.com`

**What it means:**  
The Return-Path is different from the visible sender address, but it is still under the Namecheap domain. This can be normal for bulk email services.

### Sending Server / IP

**Finding:**  
`o22.mailservice.namecheap.com [149.72.142.11]`

**What it means:**  
The sending server is consistent with the Namecheap mail infrastructure shown in the email headers.

### TLS Encryption

`TLS_AES_128_GCM_SHA256`

**What it means:**  
The email was encrypted while being transferred between the sending server and Google's mail server.


> TLS protects the email during transmission, but it does not prove that the email itself is legitimate.

---

## Suspicious Indicators

### Urgent Subject

**Finding:**  
`Rachel, cosmicfusiontech.com will expire in 7 days - renew now`

**What it means:**  
The subject creates urgency and encourages the recipient to act quickly. Urgency is commonly used in phishing and social-engineering attacks.

Suspicious. Companies sometimes make this but it is also widely used by attackers to encourage users to click on the link. This part is tricky you have to know how to identify the difference.  

## Useful Resources

[Don't Take the Bait: Recognize and Avoid Phishing Attacks](https://www.cyber.gc.ca/en/guidance/dont-take-bait-recognize-and-avoid-phishing-attacks) Canadian Centre for Cyber Security guide covering common phishing techniques, warning signs, and prevention methods.



Well, we analysed HTML of the file and we tend to believe it is legit website. Let's try another one but we will use some external websites for determining if it is legit or not.

I am going to use this website to determine malicious websites. 
This website was especially attractive because it is copy of login page of instagram.  

https://snapcart24.github.io/Instagram/

Using a website like URL2PNG, I was able to safely illustrate what the phishing page looks like without directly visiting it.

The page looks fairly basic and attempts to imitate a legitimate Instagram login page. When a victim enters their credentials, the phishing site may capture the submitted information and potentially use it to gain unauthorized access to the victim’s Instagram account.

This is a common credential-harvesting phishing technique, where attackers create a fake login page that closely resembles the legitimate service.

![Malicious Website](https://github.com/WebProgremmer1/Home-SOC-Threat-Detection-System/blob/main/mal_website.png?raw=true)

![Website Information](https://github.com/WebProgremmer1/Home-SOC-Threat-Detection-System/blob/main/inf_website.png?raw=true)

![Website Analysis](https://github.com/WebProgremmer1/Home-SOC-Threat-Detection-System/blob/main/analyze_web.png?raw=true)  



Another part of my intrution was analyzing files with Wireshark. 
I analyzed available file in 2021 with scanned network with a bunch files that transported over the network. 
The most interesting was when i decided to analyze HTTP requests. There was a file which called .audiodg.exe. Named and looked like usual file. The only weird thing is the size of the packet out of all files it is the largest one. Execept this, it looks like normal file. 

When i analyzed hash of the file, i found out the interesting observation. This hash belongs to trojan which called trojan.msil/agenttesla 55 out of 69 antivirus services flaged it as malicious. 

Which subfiles consists the file, as we can see there a legit png and the rest is most likely files with malicious program. 
Analyzed gave us a lot of information about file.

Which IP address was contacted: 

Like websites which registered spreading the same file 
