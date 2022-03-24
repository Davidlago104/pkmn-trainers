require 'ddtrace'

Datadog.configure do |c|
c.tracer sampler: Datadog::PrioritySampler.new(
post_sampler: Datadog::Sampling::RuleSampler.new(
    [
        # Sample all 'pkmn_trainers' traces at 100.00%:
        Datadog::Sampling::SimpleRule.new(service: 'pkmn_trainers', sample_rate: 1.0000)
    ]
)
)
end