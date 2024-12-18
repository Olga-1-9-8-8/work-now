export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      applies: {
        Row: {
          created_at: string
          id: number
          resume_id: number | null
          user_id: string
          vacancy_id: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          resume_id?: number | null
          user_id?: string
          vacancy_id?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          resume_id?: number | null
          user_id?: string
          vacancy_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "applies_resume_id_fkey"
            columns: ["resume_id"]
            isOneToOne: false
            referencedRelation: "resumes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "applies_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "applies_vacancy_id_fkey"
            columns: ["vacancy_id"]
            isOneToOne: false
            referencedRelation: "vacancies"
            referencedColumns: ["id"]
          },
        ]
      }
      favorites: {
        Row: {
          created_at: string
          id: number
          resume_id: number | null
          user_id: string
          vacancy_id: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          resume_id?: number | null
          user_id?: string
          vacancy_id?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          resume_id?: number | null
          user_id?: string
          vacancy_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "favorites_resume_id_fkey"
            columns: ["resume_id"]
            isOneToOne: false
            referencedRelation: "resumes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "favorites_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "favorites_vacancy_id_fkey"
            columns: ["vacancy_id"]
            isOneToOne: false
            referencedRelation: "vacancies"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          age: string | null
          avatar: string | null
          email: string
          gender: string | null
          id: string
          phone: string
          role: string
          updated_at: string | null
          username: string
        }
        Insert: {
          age?: string | null
          avatar?: string | null
          email: string
          gender?: string | null
          id: string
          phone: string
          role: string
          updated_at?: string | null
          username: string
        }
        Update: {
          age?: string | null
          avatar?: string | null
          email?: string
          gender?: string | null
          id?: string
          phone?: string
          role?: string
          updated_at?: string | null
          username?: string
        }
        Relationships: []
      }
      resumes: {
        Row: {
          about: string | null
          applicants_quantity: number
          cities_de: string[] | null
          cities_en: string[] | null
          cities_ru: string[] | null
          creation_date: string
          education: string | null
          employment: string[] | null
          employment_start_date: string | null
          id: number
          position: string
          salary: number[] | null
          schedule: string[] | null
          updated_at: string | null
          user_id: string
          views: number
          week_hours: string[] | null
        }
        Insert: {
          about?: string | null
          applicants_quantity?: number
          cities_de?: string[] | null
          cities_en?: string[] | null
          cities_ru?: string[] | null
          creation_date?: string
          education?: string | null
          employment?: string[] | null
          employment_start_date?: string | null
          id?: number
          position: string
          salary?: number[] | null
          schedule?: string[] | null
          updated_at?: string | null
          user_id: string
          views?: number
          week_hours?: string[] | null
        }
        Update: {
          about?: string | null
          applicants_quantity?: number
          cities_de?: string[] | null
          cities_en?: string[] | null
          cities_ru?: string[] | null
          creation_date?: string
          education?: string | null
          employment?: string[] | null
          employment_start_date?: string | null
          id?: number
          position?: string
          salary?: number[] | null
          schedule?: string[] | null
          updated_at?: string | null
          user_id?: string
          views?: number
          week_hours?: string[] | null
        }
        Relationships: [
          {
            foreignKeyName: "resumes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      vacancies: {
        Row: {
          about: string | null
          applicants_quantity: number
          cities_de: string[] | null
          cities_en: string[] | null
          cities_ru: string[] | null
          creation_date: string
          education: string | null
          employment: string[] | null
          employment_start_date: string | null
          gender: string | null
          id: number
          position: string
          salary: number[] | null
          schedule: string[] | null
          updated_at: string | null
          user_id: string
          views: number
          week_hours: string[] | null
        }
        Insert: {
          about?: string | null
          applicants_quantity: number
          cities_de?: string[] | null
          cities_en?: string[] | null
          cities_ru?: string[] | null
          creation_date?: string
          education?: string | null
          employment?: string[] | null
          employment_start_date?: string | null
          gender?: string | null
          id?: number
          position: string
          salary?: number[] | null
          schedule?: string[] | null
          updated_at?: string | null
          user_id: string
          views: number
          week_hours?: string[] | null
        }
        Update: {
          about?: string | null
          applicants_quantity?: number
          cities_de?: string[] | null
          cities_en?: string[] | null
          cities_ru?: string[] | null
          creation_date?: string
          education?: string | null
          employment?: string[] | null
          employment_start_date?: string | null
          gender?: string | null
          id?: number
          position?: string
          salary?: number[] | null
          schedule?: string[] | null
          updated_at?: string | null
          user_id?: string
          views?: number
          week_hours?: string[] | null
        }
        Relationships: [
          {
            foreignKeyName: "vacancies_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      views: {
        Row: {
          created_at: string
          id: number
          resume_id: number | null
          user_id: string
          vacancy_id: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          resume_id?: number | null
          user_id: string
          vacancy_id?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          resume_id?: number | null
          user_id?: string
          vacancy_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "views_resume_id_fkey"
            columns: ["resume_id"]
            isOneToOne: false
            referencedRelation: "resumes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "views_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "views_vacancy_id_fkey"
            columns: ["vacancy_id"]
            isOneToOne: false
            referencedRelation: "vacancies"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      delete_user: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      get_total_counts: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      increment: {
        Args: {
          row_id: number
        }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
