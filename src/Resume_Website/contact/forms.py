import imp
from django import forms
from django.conf import settings
from django.core.mail import send_mail

class ContactForm(forms.Form):

    name = forms.CharField(max_length=120, required=True)
    email = forms.EmailField(required=True)
    subject = forms.CharField(max_length=70, required=True)
    message = forms.CharField(widget=forms.Textarea, required=True)

    def get_info(self):
        # Cleaned data
        cl_data = super().clean()

        name = cl_data.get('name').strip()
        sender_email = cl_data.get('email')
        subject = cl_data.get('subject')

        msg = f'"{name}" sent:'
        msg += f'\n"{subject}"\n\n'
        msg += cl_data.get('message')
        msg += f'\n\nemail address: {sender_email}'

        return subject, msg, sender_email

    def send(self):

        subject, msg, sender_email = self.get_info()

        send_mail(
            subject=subject,
            message=msg,
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=[settings.RECIPIENT_ADDRESS, sender_email]
        )
