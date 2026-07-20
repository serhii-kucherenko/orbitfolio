import type { ComponentType } from "react";

export type VariantModule = {
  Variant: ComponentType;
};

export async function loadVariant(id: number): Promise<VariantModule> {
  switch (id) {
    case 1:
      return import("@/variants/V01NebulaTerminal");
    case 2:
      return import("@/variants/V02OrbitalTimeline");
    case 3:
      return import("@/variants/V03WarpCorridor");
    case 4:
      return import("@/variants/V04ConstellationSkills");
    case 5:
      return import("@/variants/V05MissionBriefing");
    case 6:
      return import("@/variants/V06GlassNebula");
    case 7:
      return import("@/variants/V07KineticType");
    case 8:
      return import("@/variants/V08SplitHorizon");
    case 9:
      return import("@/variants/V09ParallaxDeep");
    case 10:
      return import("@/variants/V10EditorialCosmos");
    case 11:
      return import("@/variants/V11VoidMinimal");
    case 12:
      return import("@/variants/V12HoloDeck");
    case 13:
      return import("@/variants/V13GalaxyRail");
    case 14:
      return import("@/variants/V14PlanetStage");
    case 15:
      return import("@/variants/V15AsciiOrbit");
    case 16:
      return import("@/variants/V16SynthwaveOrbit");
    case 17:
      return import("@/variants/V17ClinicCosmos");
    case 18:
      return import("@/variants/V18CodeRain");
    case 19:
      return import("@/variants/V19LaunchScrub");
    case 20:
      return import("@/variants/V20SignalMosaic");
    case 21:
      return import("@/variants/V21SnapChapters");
    case 22:
      return import("@/variants/V22ParticleCv");
    case 23:
      return import("@/variants/V23AuroraVancouver");
    case 24:
      return import("@/variants/V24EventHorizon");
    case 25:
      return import("@/variants/V25TelemetryTape");
    case 26:
      return import("@/variants/V26CreditRoll");
    case 27:
      return import("@/variants/V27SolarCareer");
    case 28:
      return import("@/variants/V28BlueprintEng");
    case 29:
      return import("@/variants/V29TronLattice");
    case 30:
      return import("@/variants/V30OrganicNebula");
    case 31:
      return import("@/variants/V31StarChart");
    case 32:
      return import("@/variants/V32LiquidMetal");
    case 33:
      return import("@/variants/V33IsoStation");
    case 34:
      return import("@/variants/V34WarpRail");
    case 35:
      return import("@/variants/V35AgentConsole");
    case 36:
      return import("@/variants/V36CaseImmersion");
    case 37:
      return import("@/variants/V37SwissSpace");
    case 38:
      return import("@/variants/V38BrutalOrbit");
    case 39:
      return import("@/variants/V39Telescope");
    case 40:
      return import("@/variants/V40CmdPalette");
    case 41:
      return import("@/variants/V41StoryChapters");
    case 42:
      return import("@/variants/V42JourneyMap");
    case 43:
      return import("@/variants/V43Waveform");
    case 44:
      return import("@/variants/V44Origami");
    case 45:
      return import("@/variants/V45InfiniteCanvas");
    case 46:
      return import("@/variants/V46CoverSeries");
    case 47:
      return import("@/variants/V47DualSignal");
    case 48:
      return import("@/variants/V48AgentSwarm");
    case 49:
      return import("@/variants/V49GoalsRing");
    case 50:
      return import("@/variants/V50ChampionHybrid");
    default:
      throw new Error(`Unknown variant ${id}`);
  }
}
