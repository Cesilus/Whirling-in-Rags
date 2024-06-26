# Generated by Django 5.0.2 on 2024-06-23 16:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0004_profile_old_cart'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='color',
            field=models.CharField(blank=True, choices=[('RED', 'Red'), ('BLU', 'Blue'), ('GRN', 'Green'), ('BLK', 'Black'), ('WHT', 'White')], max_length=3, null=True),
        ),
        migrations.AddField(
            model_name='product',
            name='gender',
            field=models.CharField(choices=[('M', 'Male'), ('F', 'Female'), ('U', 'Unisex')], default='U', max_length=1),
        ),
    ]
