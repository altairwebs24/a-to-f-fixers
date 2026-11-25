import { supabase } from "@/integrations/supabase/client";

const MEDIA_BUCKET = "a-to-f-fixers-media";

function publicMediaUrl(fileName: string) {
  return supabase.storage.from(MEDIA_BUCKET).getPublicUrl(fileName).data.publicUrl;
}

export const media = {
  logo: publicMediaUrl("a-to-f-logo.jpg"),
  heroVideo: publicMediaUrl("hero-work.mp4"),
  roofMetal: publicMediaUrl("roof-metal-install.jpg"),
  tiledRoof: publicMediaUrl("tiled-roof-project.jpg"),
  exteriorRepair: publicMediaUrl("exterior-repair.jpg"),
  plastering: publicMediaUrl("plastering-detail.jpg"),
  painting: publicMediaUrl("painting-detail.jpg"),
  roofRenewal: publicMediaUrl("roof-renovation.jpg"),
  servicesPoster: publicMediaUrl("services-poster.jpg"),
  businessProfile: publicMediaUrl("business-profile.jpg"),
};