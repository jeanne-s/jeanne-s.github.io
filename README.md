npm run quartz -- build --serve



To convert to substack: 

sed 's/\\\[/[/g; s/\\\]/]/g; s/\\_/_/g' content/writing/openai_anthropic_governance.md | pandoc --citeproc --bibliography=content/bibliographies/openai_anthropic_governance.bib --csl=https://raw.githubusercontent.com/citation-style-language/styles/master/nature.csl -o output.docx