import type { ComponentType } from "react"
import type { UmbrixModuleManifest } from "@umbrix/shared"

export interface RegisteredModuleUI {
  manifest: UmbrixModuleManifest
  component: ComponentType
}

const registry = new Map<string, RegisteredModuleUI>()

export function registerModuleUI(module: RegisteredModuleUI) {
  registry.set(module.manifest.id, module)
}

export function getModuleUI(id: string): RegisteredModuleUI | undefined {
  return registry.get(id)
}

export function getAllRegisteredModuleUI(): RegisteredModuleUI[] {
  return Array.from(registry.values())
}