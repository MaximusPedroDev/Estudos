import os

# Configurações de ícones para as pastas principais
LAYOUT = {
    "Academic": "🎓",
    "Video-Learning": "📺",
    "Premium-Courses": "💳",
    "Library": "📚",
    "Research-Lab": "🔍",
    "Sandbox": "🏗️"
}

def generate_tree(path):
    """Gera uma representação visual da estrutura de pastas."""
    tree_str = "```bash\n"
    for root, dirs, files in os.walk(path):
        level = root.replace(path, '').count(os.sep)
        indent = ' ' * 4 * (level)
        folder_name = os.path.basename(root)
        if folder_name and folder_name != '.git':
            tree_str += f"{indent}├── {folder_name}/\n"
            sub_indent = ' ' * 4 * (level + 1)
            for f in files:
                if f != 'README.md':
                    tree_str += f"{sub_indent}└── {f}\n"
    tree_str += "```"
    return tree_str

def update_readmes():
    base_path = os.getcwd()
    
    for folder, emoji in LAYOUT.items():
        folder_path = os.path.join(base_path, folder)
        
        if os.path.exists(folder_path):
            readme_path = os.path.join(folder_path, "README.md")
            
            # Gera a estrutura de arquivos atual da pasta
            tree = generate_tree(folder_path)
            
            content = f"""# {emoji} {folder}
> Parte da Maximus Knowledge-Base

Este diretório contém estudos e documentos relacionados a **{folder}**. Seguindo a metodologia **C.B.R.** (Consume, Build, Refactor).

---

## 📂 Estrutura de Conteúdo Atualizada
{tree}

---
[⬅️ Voltar ao Início](../README.md)

<p align="right"><i>Atualizado automaticamente por MaximusScript 🛠️</i></p>
"""
            
            with open(readme_path, "w", encoding="utf-8") as f:
                f.write(content)
            print(f"✅ README atualizado em: {folder}")

if __name__ == "__main__":
    update_readmes()