package user_controller

type WebhookPayload struct {
	Type string `json:"type"`
	Data Data   `json:"data"`
}

type Data struct {
	ID                      string          `json:"id"`
	PrimaryEmailVerified    bool            `json:"primary_email_verified"`
	PrimaryEmailAuthEnabled bool            `json:"primary_email_auth_enabled"`
	SignedUpAtMillis        int64           `json:"signed_up_at_millis"`
	LastActiveAtMillis      int64           `json:"last_active_at_millis"`
	OauthProviders          []OauthProvider `json:"oauth_providers"`
	PrimaryEmail            string          `json:"primary_email"`
	DisplayName             string          `json:"display_name"`
	SelectedTeam            SelectedTeam    `json:"selected_team"`
	SelectedTeamID          string          `json:"selected_team_id"`
	ProfileImageURL         string          `json:"profile_image_url"`
	ClientMetadata          map[string]any  `json:"client_metadata"`
	ClientReadOnlyMetadata  map[string]any  `json:"client_read_only_metadata"`
	ServerMetadata          map[string]any  `json:"server_metadata"`
}

type OauthProvider struct {
	AccountID string `json:"account_id"`
	Email     string `json:"email"`
	ID        string `json:"id"`
}

type SelectedTeam struct {
	CreatedAtMillis        int64          `json:"created_at_millis"`
	ID                     string         `json:"id"`
	DisplayName            string         `json:"display_name"`
	ServerMetadata         map[string]any `json:"server_metadata"`
	ProfileImageURL        string         `json:"profile_image_url"`
	ClientMetadata         map[string]any `json:"client_metadata"`
	ClientReadOnlyMetadata map[string]any `json:"client_read_only_metadata"`
}
