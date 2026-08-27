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


