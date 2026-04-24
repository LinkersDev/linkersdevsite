import type { ProjectType } from "@/lib/demo-config";

import { automationSystem } from "@/lib/demo/systems/automation-system";
import { businessWebsiteSystem } from "@/lib/demo/systems/business-website";
import { hospitalSystem } from "@/lib/demo/systems/hospital-system";
import { mobileAppSystem } from "@/lib/demo/systems/mobile-app";
import { restaurantSystem } from "@/lib/demo/systems/restaurant-system";
import { shopSystem } from "@/lib/demo/systems/shop-system";
import { schoolSystem } from "@/lib/demo/systems/school-system";
import { supermarketSystem } from "@/lib/demo/systems/supermarket-system";
import type { DemoSystemConfig } from "@/lib/demo/types";

export const demoSystems: Record<ProjectType, DemoSystemConfig> = {
  "school-system": schoolSystem,
  "hospital-system": hospitalSystem,
  "restaurant-system": restaurantSystem,
  "supermarket-system": supermarketSystem,
  "shop-system": shopSystem,
  "business-website": businessWebsiteSystem,
  "mobile-app": mobileAppSystem,
  "automation-system": automationSystem,
};

export function getDemoSystem(id: ProjectType) {
  return demoSystems[id];
}

