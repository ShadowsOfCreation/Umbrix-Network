import type { UmbrixModuleManifest } from "@umbrix/shared"
import { registerModuleUI } from "./ui-registry"

import ChatModule from "./builtins/ChatModule"
import ProjectsModule from "./builtins/ProjectsModule"

export function registerBuiltinModules(manifests: UmbrixModuleManifest[]) {
  for (const manifest of manifests) {
    if (manifest.id === "umbrix.chat") {
      registerModuleUI({
        manifest,
        component: ChatModule,
      })
    }

    if (manifest.id === "umbrix.projects") {
      registerModuleUI({
        manifest,
        component: ProjectsModule,
      })
    }
  }
}