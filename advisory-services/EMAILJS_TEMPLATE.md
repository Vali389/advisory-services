# EmailJS Template Setup

## Step 1: Subject Line

Copy this into the **Subject** field in EmailJS:

```
New Enquiry from {{from_name}} | SR Advisory Services
```

## Step 2: Content (HTML)

1. Open **email-template.html** in this folder
2. Copy the **entire content** (from `<!DOCTYPE html>` to `</html>`)
3. In EmailJS: **Email Templates** → **template_vwpqi9e** → **Content**
4. Select **HTML** as content type
5. Paste the copied HTML

## Step 3: Template Variables (Must Match Exactly)

In EmailJS dashboard → **Email Templates** → **template_vwpqi9e** → **Settings** or **Content**, add these variables. Names must match exactly:

| Variable       | Description        |
|----------------|--------------------|
| `{{from_name}}`  | Sender's name      |
| `{{from_email}}` | Sender's email     |
| `{{phone}}`      | Contact number     |
| `{{company}}`    | Company name       |
| `{{message}}`    | Message content    |
| `{{to_email}}`   | Your email        |

## Credentials

- **Service ID:** service_6z2drdh
- **Template ID:** template_vwpqi9e
- **Public Key:** CoYQcdmjaJ5XWLYg3

## How to Find Your Template ID

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/admin/templates)
2. Click **Email Templates** in the left sidebar
3. You'll see a list of your templates
4. Each template shows its **Template ID** (e.g. `template_abc123`) – usually in the template card or when you click the template
5. Copy the ID (it starts with `template_`) and update `EMAILJS_TEMPLATE_ID` in `src/pages/Contact.jsx` (line 9)

---

## Fixing 400 Bad Request Error

1. **Template variables** – In EmailJS dashboard, open your template → Settings. Ensure the template uses exactly: `from_name`, `from_email`, `phone`, `company`, `message`, `to_email` (no typos, same spelling).

2. **Service connection** – Go to **Email Services** → **service_6z2drdh** → **Reconnect** your Gmail/email account. If using Gmail, enable "Send email on behalf of Gmail".

3. **To Email** – In template settings, set **To Email** to your recipient (e.g. `venkatarohini68@gmail.com`) or use `{{to_email}}` if your template supports it.

4. **IDs** – Confirm Service ID, Template ID, and Public Key in the dashboard match the values in this file.
