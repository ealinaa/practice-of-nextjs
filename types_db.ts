// export type Json =
//   | string
//   | number
//   | boolean
//   | null
//   | { [key: string]: Json | undefined }
//   | Json[]

// export type Database = {}

// type PublicSchema = Database[Extract<keyof Database, "public">]

// export type Tables<
//   PublicTableNameOrOptions extends
//     | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
//     | { schema: keyof Database },
//   TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
//     ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
//         Database[PublicTableNameOrOptions["schema"]]["Views"])
//     : never = never,
// > = PublicTableNameOrOptions extends { schema: keyof Database }
//   ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
//       Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
//       Row: infer R
//     }
//     ? R
//     : never
//   : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
//         PublicSchema["Views"])
//     ? (PublicSchema["Tables"] &
//         PublicSchema["Views"])[PublicTableNameOrOptions] extends {
//         Row: infer R
//       }
//       ? R
//       : never
//     : never

// export type TablesInsert<
//   PublicTableNameOrOptions extends
//     | keyof PublicSchema["Tables"]
//     | { schema: keyof Database },
//   TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
//     ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
//     : never = never,
// > = PublicTableNameOrOptions extends { schema: keyof Database }
//   ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
//       Insert: infer I
//     }
//     ? I
//     : never
//   : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
//     ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
//         Insert: infer I
//       }
//       ? I
//       : never
//     : never

// export type TablesUpdate<
//   PublicTableNameOrOptions extends
//     | keyof PublicSchema["Tables"]
//     | { schema: keyof Database },
//   TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
//     ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
//     : never = never,
// > = PublicTableNameOrOptions extends { schema: keyof Database }
//   ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
//       Update: infer U
//     }
//     ? U
//     : never
//   : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
//     ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
//         Update: infer U
//       }
//       ? U
//       : never
//     : never

// export type Enums<
//   PublicEnumNameOrOptions extends
//     | keyof PublicSchema["Enums"]
//     | { schema: keyof Database },
//   EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
//     ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
//     : never = never,
// > = PublicEnumNameOrOptions extends { schema: keyof Database }
//   ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
//   : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
//     ? PublicSchema["Enums"][PublicEnumNameOrOptions]
//     : never

// export type CompositeTypes<
//   PublicCompositeTypeNameOrOptions extends
//     | keyof PublicSchema["CompositeTypes"]
//     | { schema: keyof Database },
//   CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
//     schema: keyof Database
//   }
//     ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
//     : never = never,
// > = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
//   ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
//   : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
//     ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
//     : never

export type Database = {
  public: {
    Tables: {
      products: {
        Row: {
          id: string;
          active: boolean;
          name: string;
          description: string | null;
          image: string | null;
          metadata: Record<string, any> | null;
        };
        Insert: {
          id: string;
          active: boolean;
          name: string;
          description?: string | null;
          image?: string | null;
          metadata?: Record<string, any> | null;
        };
        Update: {
          id?: string;
          active?: boolean;
          name?: string;
          description?: string | null;
          image?: string | null;
          metadata?: Record<string, any> | null;
        };
      };
      prices: {
        Row: {
          id: string;
          product_id: string;
          active: boolean;
          currency: string;
          description: string | null;
          type: string;
          unit_amount: number | null;
          interval: string | null;
          interval_count: number | null;
          trial_period_days: number | null;
          metadata: Record<string, any> | null;
        };
        Insert: {
          id: string;
          product_id: string;
          active: boolean;
          currency: string;
          description?: string | null;
          type: string;
          unit_amount?: number | null;
          interval?: string | null;
          interval_count?: number | null;
          trial_period_days?: number | null;
          metadata?: Record<string, any> | null;
        };
        Update: {
          id?: string;
          product_id?: string;
          active?: boolean;
          currency?: string;
          description?: string | null;
          type?: string;
          unit_amount?: number | null;
          interval?: string | null;
          interval_count?: number | null;
          trial_period_days?: number | null;
          metadata?: Record<string, any> | null;
        };
      };
    };
    Views: {}; // Add any views if you have them
    Functions: {}; // Add any functions if you use them
    Enums: {}; // Add any enums if you have them
    CompositeTypes: {}; // Add composite types if necessary
  };
};

