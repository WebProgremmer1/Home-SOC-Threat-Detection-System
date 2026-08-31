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



Network File Analysis with Wireshark

Another part of my investigation involved analyzing network traffic and transferred files using Wireshark.

I analyzed a network capture from 2021 that contained multiple files transferred over the network. I focused primarily on analyzing HTTP requests and the files associated with them.

One file in particular caught my attention: .audiodg.exe. At first glance, the filename looked similar to a legitimate Windows system process, and there was nothing obviously suspicious about it.

However, one unusual characteristic stood out: the packet associated with this file was significantly larger than the others.

This made the file worth investigating further.

Hash Analysis

I extracted the file’s hash and analyzed it using antivirus and malware-detection services.

The results revealed an important finding: the hash was associated with a Trojan identified as Trojan.MSIL/AgentTesla.

55 out of 69 antivirus engines flagged the file as malicious.

Embedded Files

Further analysis showed that the suspicious file contained several embedded or associated files.

As shown below, one appears to be a legitimate PNG image, while the remaining files required further investigation and could potentially be associated with the malicious payload.

Network Indicators

The analysis also provided useful information about the file’s network activity, including the IP addresses it contacted.

I was also able to identify websites and domains associated with the distribution or detection of the same malicious file.

Key Findings

* Suspicious executable identified as .audiodg.exe
* File stood out because of its unusually large network transfer size
* Hash analysis associated the file with Trojan.MSIL/AgentTesla
* 55/69 antivirus engines flagged the file as malicious
* Additional embedded or associated files were identified
* Network analysis revealed IP addresses contacted by the file
* Additional domains associated with the malicious file were identified

Conclusion

What initially appeared to be an ordinary executable became suspicious after examining its network behavior and file characteristics.

Hash analysis provided much stronger evidence, with 55 out of 69 antivirus engines identifying the file as malicious and associating it with Agent Tesla.

This investigation demonstrated how combining Wireshark traffic analysis, file extraction, hash analysis, and threat intelligence can help identify malicious files that may otherwise appear legitimate.
