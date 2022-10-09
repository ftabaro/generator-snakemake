rule dummy:
    # input:
    output:
        expand("results/analysis/{outfile}.txt")
    log:
        "results/log/"
    shell:
        "echo {wildcards.outfile} > {output}"
