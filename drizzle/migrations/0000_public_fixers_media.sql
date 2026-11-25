CREATE POLICY "a_to_f_fixers_media_public_read"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'a-to-f-fixers-media');