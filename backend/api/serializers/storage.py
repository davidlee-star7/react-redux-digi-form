from rest_framework import serializers

from storage.models import Medium


VALID_VIDEO_MIMETYPES = (
    'video/webm',
    'video/ogg',
    'video/mp4',
    'video/mpeg',
)


class MediumSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medium
        fields = ('url', 'type', 'mimetype')


class UploadImageSerializer(serializers.Serializer):
    file = serializers.ImageField(max_length=1024 * 1024 * 2)


class UploadVideoSerializer(serializers.Serializer):
    file = serializers.FileField(max_length=1024 * 1024 * 30)

    def validate_file(self, value):
        if value.content_type not in VALID_VIDEO_MIMETYPES:
            raise serializers.ValidationError('Not supported video type')
        return value