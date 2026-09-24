package tebex_go_test

import (
	"encoding/json"
	"fmt"
	"os"
)

// Config mirrors scripts/e2e_config.yaml but in JSON form (the SDK module graph
// has no YAML library available, and encoding/json is stdlib).
type Config struct {
	Auth struct {
		Username string `json:"username"`
		Password string `json:"password"`
	} `json:"auth"`
	// Variables are path/body substitutions (token, basketIdent, packageId, ...).
	// All values are strings; numeric SDK params are converted at call time.
	Variables map[string]string `json:"variables"`
	// Order is the sequence of operationIds to exercise, in run order.
	Order []string `json:"order"`
}

func loadConfig(path string) (*Config, error) {
	b, err := os.ReadFile(path)
	if err != nil {
		return nil, fmt.Errorf("read config %s: %w", path, err)
	}
	var c Config
	if err := json.Unmarshal(b, &c); err != nil {
		return nil, fmt.Errorf("parse config %s: %w", path, err)
	}
	if c.Variables == nil {
		c.Variables = map[string]string{}
	}
	return &c, nil
}
