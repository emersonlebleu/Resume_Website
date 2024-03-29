import imp
from django import forms
from django.conf import settings
from django.core.mail import send_mail

class ContactForm(forms.Form):

    name = forms.CharField(max_length=120, required=True)
    email = forms.EmailField(required=True)
    subject = forms.CharField(max_length=70, required=True)
    message = forms.CharField(widget=forms.Textarea, required=True)
    confirm = forms.ChoiceField(choices=[("robot", "Robot"), ("non-human", "Non-Human"), ("script", "Script"), ("human", "Person")], required=True, widget=forms.Select, label="What are you?")

    def get_info(self):
        # Cleaned data
        cl_data = super().clean()

        name = cl_data.get('name').strip()
        sender_email = cl_data.get('email')
        subject = cl_data.get('subject')
        is_person = cl_data.get('confirm')

        msg = f'"{name}" @email address: {sender_email} sent:\n\n'
        msg += cl_data.get('message')

        return subject, msg, sender_email, is_person


    def send(self):
        subject, msg, sender_email, is_person = self.get_info()
        if is_person == 'human':
            send_mail(
                subject=subject,
                message=msg,
                from_email=settings.EMAIL_HOST_USER,
                recipient_list=[settings.RECIPIENT_ADDRESS, sender_email]
            )
