import os

# Configurações de ícones e temas
LAYOUT = {
    "Academic": "🎓",
    "Video-Learning": "📺",
    "Premium-Courses": "💳",
    "Library": "📚",
    "Research-Lab": "🔍",
    "Sandbox": "🏗️"
}

def get_folder_status(path):
    """
    Define se um tema está concluído.
    Regra: Se houver um arquivo 'done.md', 'concluido.txt' ou se a pasta 
    tiver o emoji ✅ no nome, retorna status Concluído.
    """
    is_done = False
    # Verifica arquivos sinalizadores dentro da pasta
    files_in_folder = os.listdir(path)
    if "done.md" in files_in_folder or "done" in files_in_folder:
        is_done = True
    
    # Verifica se a própria pasta já tem o emoji de concluído
    if "✅" in os.path.basename(path):
        is_done = True
        
    return "🟢 Concluído" if is_done else "🟡 Em progresso"

def generate_status_table(folder_path):
    """Gera uma tabela Markdown com o status de cada subdiretório."""
    table = "| Tema / Assunto | Status | Link |\n| :--- | :--- | :--- |\n"
    
    # Lista apenas pastas de primeiro nível (os temas)
    subfolders = [f for f in os.listdir(folder_path) if os.path.isdir(os.path.join(folder_path, f))]
    
    if not subfolders:
        return "_Nenhum tema registrado ainda._"

    for sub in sorted(subfolders):
        full_path = os.path.join(folder_path, sub)
        status = get_folder_status(full_path)
        # Cria link relativo para a pasta
        link = f"[Acessar](./{sub.replace(' ', '%20')})"
        table += f"| {sub} | {status} | {link} |\n"
    
    return table

def update_readmes():
    base_path = os.getcwd()
    
    for folder, emoji in LAYOUT.items():
        folder_path = os.path.join(base_path, folder)
        
        if os.path.exists(folder_path):
            readme_path = os.path.join(folder_path, "README.md")
            
            # Gera a tabela de status baseada nas subpastas
            status_table = generate_status_table(folder_path)
            
            content = f"""# {emoji} {folder}
> Parte da Maximus Knowledge-Base

Este diretório contém estudos e documentos relacionados a **{folder}**. 
Seguimos o ciclo **C.B.R.** para garantir a qualidade do aprendizado.

---

## 📊 Status dos Estudos
{status_table}

---

## 🧠 Metodologia Aplicada aqui
1. **Consume:** Teoria e anotações.
2. **Build:** Projetos na subpasta de cada tema.
3. **Refactor:** Código limpo e revisado.

---
[⬅️ Voltar ao Início](../README.md)

<p align="right"><i>Gerado automaticamente por MaximusScript 🛠️</i></p>
"""
            
            with open(readme_path, "w", encoding="utf-8") as f:
                f.write(content)
            print(f"✅ README atualizado em: {folder}")

if __name__ == "__main__":
    update_readmes()