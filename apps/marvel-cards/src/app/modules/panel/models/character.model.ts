import { Team } from './team.model'
import { CharacterSkill } from './character-skill.model'

export interface Character {
  id: string
  name: string
  slug: string
  identity: string
  bio: string
  skill: CharacterSkill
  teamId: string[]
  team?: Team[]
}
